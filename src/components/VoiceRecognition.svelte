<script>
import { onMount } from "svelte" 
import { synonyms } from "../data/voiceData.js" 
import { transcript } from "../data/currentData.js"

import VoiceCommands from "./VoiceCommands.svelte" 

let visible = true 
let support = true 
let recordingText = "Press the button to Start listening." 
let recognizing = false 

// https://dev.to/karkranikhil/voice-controlled-notes-taking-application-using-svelte-1kek
try {
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
  var recognition = new SpeechRecognition() 
  recognition.continuous = false 
  recognition.interimResults = false 
  recognition.lang = "EN-US" 
} catch (e) {
  support = false 
  // console.error(e) 
}

onMount(async () => {
  const voiceButton = document.getElementById("voice-button")
  if (voiceButton) voiceButton.onclick = () => {
    if (recognizing) {
      recognition.stop()
      recognizing = false 
      recordingText = "Voice recognition turned off." 
    } else {
      recognition.start()
    }
  } 
})

if (recognition) {
  // onresult called every time the Speech API captures Voice.
  recognition.onresult = (event) => {
    let current = event.resultIndex 

    // Get a transcript of what was said.
    $transcript = event.results[current][0].transcript.toLowerCase() 

  	// replace synonyms in transcript
    for (const synonym of Object.keys(synonyms)) {
      transcript.update(value => value.replace(synonym, synonyms[synonym]))
    }

    recordingText = $transcript
  } 

  // Trigger on start
  recognition.onstart = () => {
    recognizing = true 
    // setting the text to inform user about the action
    recordingText = "The spirit box is listening..." 
  } 

  // Trigger on end
  recognition.onspeechend = () => {
    recognizing = false 
    // setting the text to inform user about the action
    setTimeout(() => recognition.start(), 1000) 
  } 

  // Trigger on error
  recognition.onerror = (event) => {
    recognizing = false 
    if (event.error == "no-speech") {
    // setting the text to inform user about the action
      recordingText = "No Voice was detected. Trying again..." 
    }
    setTimeout(() => recognition.start(), 1000) 
  } 
}
</script>

<style>
header {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 4rem;
  width: 40rem;
  max-width: 100%;
  bottom: 1rem;
  z-index: 1;
}

@media only screen and (max-width: 45rem) {
  header {
    flex-direction: column-reverse;
    width: 100%;
  }
}

header p {
  margin-bottom: 0;
  text-transform: capitalize;
}

button.close {
  border-radius: 50%;
  width: 3rem;
  height: 2.7rem;
  cursor: pointer;
  background-color: var(--color-text);
  color: var(--color-book-light);
  border: 0;
  outline: 0;
  transform: translate(-52%, 0);
}

@media only screen and (max-width: 45rem) {
  button.close {
    height: 3rem;
    transform: translate(0, 50%);
  }
}

button.close:hover, button.close:focus {
  background-color: var(--color-book-dark);
}

.recorder {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-text);
  padding: 1rem;
}

.recorder > * {
  color: var(--color-book-light);
}

.recorder button {
  min-height: 2rem;
  min-width: 2rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>

<VoiceCommands/>
<header>
  {#if visible}
    <div class="recorder">
      {#if support}
        <button type="button" id="voice-button"></button>
        <p>{recordingText}</p>
      {:else}
        <p>Please open this page in the newest version Chrome or Edge to use voice recognition.</p>
      {/if}
    </div>
    <button class="close" type="button" on:click={() => visible = !visible}>✕</button>
  {/if}
</header>
