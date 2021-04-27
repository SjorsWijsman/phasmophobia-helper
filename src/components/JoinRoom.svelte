<script>
import { currentRoom } from "../socket.js"

export let joinRoomDialogue
export let roomId

$: console.log(roomId)

currentRoom.subscribe(value => console.log(value))
</script>

<style>
section {
  min-width: 15rem;
  max-width: 80vw;
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-checked);
  padding: 1rem;
  z-index: 2;
  flex-direction: column;
}

section::before {
  pointer-events: none;
  content: "";
  width: 200vw;
  height: 200vh;
  position: absolute;
  top: -100vh;
  left: -100vw;
  z-index: 1;
  background-color: rgba(0,0,0,0.2)
}

section * {
  z-index: 2;
  color: var(--color-book-light);
}

section div {
  display: flex;
  margin-top: .5rem;
}

section button {
  flex-grow: 1;
  padding: .5rem;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  opacity: 0.9;
}

section button:disabled {
  color: white;
  cursor: default;
}

section button:is(:hover, :focus) {
  opacity: 1;
}

label {
  font-weight: bold;
}

label span {
  font-weight: normal;
}

input {
  color: var(--color-text);
  text-transform: none;
  margin-top: .8rem;
}
</style>

<section>
  <label>
    {#if $currentRoom}
     Joined Room: <span>{$currentRoom}</span>
    {:else}
      Join Room
    {/if}
    <input type="text" name="name" placeholder="Room ID" bind:value={roomId} maxlength="16">
  </label>
  <div>
    {#if $currentRoom}
      <button on:click={() => { 
        currentRoom.set("") 
        roomId=""
      }}>Leave Room</button>
    {:else}
      <button on:click={() => currentRoom.set(roomId)} disabled={!roomId}>Join Room</button>
    {/if}
    <button on:click={() => joinRoomDialogue = false}>Close</button>
  </div>
</section>
