<script>
import { objectiveList, evidenceList } from "../data/gameData.js"
import { transcript, ghostName, ghostResponse, objectives, gatheredEvidence } from "../data/currentData.js"
import { emitName, emitResponse, emitObjectives, emitEvidence } from "../socket.js"

const audio = new Audio('./resources/ding.mp3')
const commandKeyWords = {
  "ghostName": [["ghost"], ["name"]],
  "ghostResponse": [["ghost"], ["respond", "response"]],
  "objectives": [["objective"]],
  "gatheredEvidence": [["we got", "we have", "i got", "i have", "confirm", "rule out", "ruled out", "reset"]]
}

// Check transcript for commands on transcript change
transcript.subscribe((value) => {
  if (value) checkVoiceForCommands()
})

function checkVoiceForCommands() {
  for (const command of Object.keys(commandKeyWords)) {
    const keyWords = commandKeyWords[command]
    let containsKeyWord = true
    for (const keyWordList of keyWords) {
      // if transcript doesn't contain any of the words in the keyword list
      if (!keyWordList.some(word => $transcript.includes(word))) {
        containsKeyWord = false
      }
    }
    if (containsKeyWord) {
      console.log(command)
      switch (command) {
        case "ghostName":
          setGhostName()
          emitName($ghostName)
          break
        case "ghostResponse":
          setGhostResponse()
          emitResponse($ghostResponse)
          break
        case "objectives":
          setObjectives()
          emitObjectives($objectives)
          break
        case "gatheredEvidence":
          setGatheredEvidence()
          emitEvidence($gatheredEvidence)
          break
      }
    }
  }
}

function setGhostName() {
  ghostName.set($transcript.split(" ").slice(-2).join(" "))
  audio.play()
}

function setGhostResponse() {
  if ($transcript.includes("everyone")) {
    ghostResponse.set("everyone")
    audio.play()
  }
  else if ($transcript.includes("alone")) {
    ghostResponse.set("alone")
    audio.play()
  }
}

function setObjectives() {
  objectives.update(list => {
    // for some reason it creates an empty string in the list, remove it:
    list = list.filter(item => item !== "")
    for (const objective of objectiveList) {
      // if trigger is in transcript & isn't already in the objective list
      if ($transcript.includes(objective.trigger.toLowerCase())) {
        if (!list.includes(objective.trigger.toLowerCase())) {
          list.push(objective.value)
          audio.play()
        }
      }
    }
    return list
  })
}

function setGatheredEvidence() {
  const confirmList = ["we got", "we have", "i got", "i have", "confirm"]
  const ruleOutList = ["rule out", "ruled out"]
  const resetList = ["reset"]
  let value = null
  if (confirmList.some(word => $transcript.includes(word))) {
    value = true
  } else if (ruleOutList.some(word => $transcript.includes(word))) {
    value = false
  } else if (resetList.some(word => $transcript.includes(word))) {
    value = undefined
  }
  if (value !== null) {
    gatheredEvidence.update(obj => {
      // use object.create to bypass creating a reference
      for (const evidence of evidenceList) {
        if ($transcript.includes(evidence.trigger.toLowerCase())) {
          obj[evidence.value] = value
          audio.play()
        }
      }
      return obj
    })
  }
}
</script>
