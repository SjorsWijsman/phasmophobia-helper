<script>
import { currentRoom } from "../socket.js"
</script>

<style>
input {
  z-index: 10;
}
</style>

<input type="text" on:blur={(e) => currentRoom.set(e.target.value)}>