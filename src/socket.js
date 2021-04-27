import { writable } from "svelte/store"
import { ghostName, ghostResponse, objectives, gatheredEvidence } from "./data/currentData.js"

const socket = io()

export const currentRoom = writable("")

let roomValue = null;

// Join Room on currentRoom change
currentRoom.subscribe(room => {
  roomValue = room
  if (room) {
    socket.emit('join', room)
    console.log('joined room')
  }
})


// Emit Ghost Name
export function emitName(value) {
  if (roomValue) socket.emit('name', [roomValue, value])
}

// Receive Ghost Name
socket.on('name', name => {
  ghostName.update(value => value = name)
})


// Emit Ghost Response
export function emitResponse(value) {
  if (roomValue) socket.emit('response', [roomValue, value])
}

// Receive Ghost Response
socket.on('response', response => {
  ghostResponse.update(value => value = response)
})


// Emit Objectives
export function emitObjectives(value) {
  if (roomValue) socket.emit('objectives', [roomValue, value])
}

// Receive Objectives
socket.on('objectives', objectivesList => {
  objectives.update(value => value = objectivesList)
})


// Emit Evidence
export function emitEvidence(value) {
  if (roomValue) socket.emit('evidence', [roomValue, value])
}

// Receive Evidence
socket.on('evidence', evidence => {
  gatheredEvidence.update(value => value = evidence)
})