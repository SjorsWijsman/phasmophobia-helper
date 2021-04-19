<script>
import { ghostName } from "../../data/currentData.js"
import { emitName } from "../../socket.js"
</script>

<article>
  <label>
    <slot/>
    <input type="text" name="name" placeholder="William Williams" bind:value={$ghostName} on:blur={emitName($ghostName)}>
  </label>
</article>
