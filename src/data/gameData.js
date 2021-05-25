export const objectiveList = [
  {
    text: "Have a member of your team witness a Ghost Event",
    trigger: "Ghost Event",
    value: "ghostEvent",
  },
  {
    text: "Capture a Photo of the Ghost",
    trigger: "Photo",
    value: "photo",
  },
  {
    text: "Find evidence of the paranormal with an EMF Reader",
    trigger: "EMF Reader",
    value: "emfReader",
  },
  {
    text: "Detect a Ghosts presence with a Motion Sensor",
    trigger: "Motion Sensor",
    value: "motionSensor",
  },
  {
    text: "Cleanse the area near the Ghost using Smudge Sticks",
    trigger: "Cleanse",
    value: "cleanse",
  },
  {
    text: "Prevent the Ghost from hunting with a Crucifix",
    trigger: "Crucifix",
    value: "crucifix",
  },
  {
    text: "Get a Ghost to walk through Salt",
    trigger: "Salt",
    value: "salt",
  },
  {
    text: "Detect a Ghost presence with a Candle",
    trigger: "Candle",
    value: "candle",
  },
  {
    text: "Escape the Ghost during a Hunt with no deaths",
    trigger: "deaths",
    value: "deaths",
  },
  {
    text: "Use Smudge Sticks while the Ghost is hunting a player",
    trigger: "Smudge Sticks",
    value: "smudgeSticks",
  },
  {
    text: "Get an average Sanity below 25%",
    trigger: "Sanity",
    value: "sanity",
  },
]

export const evidenceList = [
  {
    title: "EMF Level 5",
    trigger: "level five",
    value: "emfLevel5",
  },
  {
    title: "Fingerprints",
    trigger: "fingerprint",
    value: "fingerprints",
  },
  {
    title: "Freezing Temperatures",
    trigger: "freezing",
    value: "freezingTemperatures",
  },
  {
    title: "Ghost Orb",
    trigger: "orb",
    value: "ghostOrb",
  },
  {
    title: "Ghost Writing",
    trigger: "writing",
    value: "ghostWriting",
  },
  {
    title: "Spirit Box",
    trigger: "spirit box",
    value: "spiritBox",
  },
]

export const ghostList = [
  {
    name: "Banshee",
    value: "banshee",
    evidence: ["emfLevel5", "fingerprints", "freezingTemperatures"],
  },
  {
    name: "Demon",
    value: "demon",
    evidence: ["freezingTemperatures", "ghostWriting", "spiritBox"],
  },
  {
    name: "Jinn",
    value: "jinn",
    evidence: ["emfLevel5", "ghostOrb", "spiritBox"],
  },
  {
    name: "Mare",
    value: "mare",
    evidence: ["freezingTemperatures", "ghostOrb", "spiritBox"],
  },
  {
    name: "Oni",
    value: "oni",
    evidence: ["emfLevel5", "ghostWriting", "spiritBox"],
  },
  {
    name: "Phantom",
    value: "phantom",
    evidence: ["emfLevel5", "freezingTemperatures", "ghostOrb"],
  },
  {
    name: "Poltergeist",
    value: "poltergeist",
    evidence: ["fingerprints", "ghostOrb", "spiritBox"],
  },
  {
    name: "Revenant",
    value: "revenant",
    evidence: ["emfLevel5", "fingerprints", "ghostWriting"],
  },
  {
    name: "Shade",
    value: "shade",
    evidence: ["emfLevel5", "ghostOrb", "ghostWriting"],
  },
  {
    name: "Spirit",
    value: "spirit",
    evidence: ["fingerprints", "ghostWriting", "spiritBox"],
  },
  {
    name: "Wraith",
    value: "wraith",
    evidence: ["fingerprints", "freezingTemperatures", "spiritBox"],
  },
  {
    name: "Yurei",
    value: "yurei",
    evidence: ["freezingTemperatures", "ghostOrb", "ghostWriting"],
  },
]
