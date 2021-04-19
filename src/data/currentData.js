import { writable } from "svelte/store"

// Create writable stores for each data point
export const transcript = writable()
export const ghostName = writable()
export const ghostResponse = writable()
export const objectives = writable()
export const gatheredEvidence = writable()
resetData()

export function resetData() {
  transcript.set("")
  ghostName.set("")
  ghostResponse.set("everyone")
  objectives.set([""])
  gatheredEvidence.set({})
}
