<script>
import JoinRoom from "./JoinRoom.svelte"
import { currentRoom, userCount } from "../socket.js"

let joinRoomDialogue = false
let roomId = $currentRoom
</script>

<style>
button {
  z-index: 10;
  padding: 0rem;
  position: relative;
  max-width: 5rem;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: -7rem;
  margin-bottom: -5.5rem;
  cursor: pointer;
  opacity: 0.9;
}

button:is(:focus, :hover) {
  transform: scale(1.05);
  opacity: 1;
}

button:is(:focus, :hover) p {
  font-weight: bold;
}

button p {
  font-size: 0.9rem;
}

button img {
  max-width: 2.5rem;
}
</style>


<button on:click={() => joinRoomDialogue = true}>
  <img src="./resources/icons/profile.svg" alt="">
  {#if $currentRoom}
    <p>{$userCount} Players Connected</p>
  {:else}
    <p>Share With Other Players</p>
  {/if}
</button>
{#if joinRoomDialogue}
<JoinRoom bind:joinRoomDialogue bind:roomId></JoinRoom>
{/if}
