import { ghostName, ghostResponse, objectives, gatheredEvidence } from "./data/currentData.js";

const socket = io();

// Ghost Name
export function emitName(value) {
  socket.emit('name', value)
}

socket.on('name', response => {
  ghostName.update(value => value = response)
})

// Ghost Response
export function emitResponse(value) {
  socket.emit('response', value)
}

socket.on('response', response => {
  ghostResponse.update(value => value = response)
})

// Objectives
export function emitObjectives(value) {
  socket.emit('objectives', value)
}

socket.on('objectives', response => {
  objectives.update(value => value = response)
})

// Evidence
export function emitEvidence(value) {
  socket.emit('evidence', value)
}

socket.on('evidence', response => {
  gatheredEvidence.update(value => value = response)
})
