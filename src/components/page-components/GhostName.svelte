<script>
import { ghostName } from "../../data/currentData.js"
import { emitData } from "../../socket.js"
</script>

<article>
  <label>
    <slot/>
    <input type="text" name="name" placeholder="William Williams" bind:value={$ghostName} on:blur={() => emitData()}>
  </label>
</article>
