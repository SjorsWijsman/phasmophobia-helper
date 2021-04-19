<script>
import { ghostResponse } from "../../data/currentData.js"
import { emitResponse } from "../../socket.js"
</script>

<article>
  <slot/>
  <label class="control control-radio">
    Everyone
    <input type="radio" name="response" value="everyone" bind:group={$ghostResponse} on:change={emitResponse($ghostResponse)}/>
    <div class="control_indicator"></div>
  </label>
  <label class="control control-radio">
    People who are alone
    <input type="radio" name="response" value="alone" bind:group={$ghostResponse} on:change={emitResponse($ghostResponse)}/>
    <div class="control_indicator"></div>
  </label>
</article>
