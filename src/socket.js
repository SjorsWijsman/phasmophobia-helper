import { writable } from "svelte/store"
import { ghostName, ghostResponse, objectives, gatheredEvidence } from "./data/currentData.js"

const socket = io()

export const currentRoom = writable("")

let roomValue = null


// Sadly have to do this bullshit because $ syntax isn't available here
let ghostNameValue = null
ghostName.subscribe(value => ghostNameValue = value)
let ghostResponseValue = null
ghostResponse.subscribe(value => ghostResponseValue = value)
let objectivesValue = null
objectives.subscribe(value => objectivesValue = value)
let gatheredEvidenceValue = null
gatheredEvidence.subscribe(value => gatheredEvidenceValue = value)


// Join Room on currentRoom change
currentRoom.subscribe(room => {
  roomValue = room
  if (room) {
    socket.emit('join', room)
    console.log('Joined Room: ' + room)
  }
})

export function leaveRoom() {
  socket.emit('leave', roomValue)
  currentRoom.set('')
}

// Emit data to room
export function emitData() {
  if (roomValue) {
    const data = {
      'ghostName': ghostNameValue, 
      'ghostResponse': ghostResponseValue, 
      'objectives': objectivesValue, 
      'gatheredEvidence': gatheredEvidenceValue
    }
    socket.emit('data', [roomValue, data])
  }
}

// Receive data
socket.on('data', data => {
  ghostName.set(data.ghostName)
  ghostResponse.set(data.ghostResponse)
  objectives.set(data.objectives)
  gatheredEvidence.set(data.gatheredEvidence)
})