<script>
import { fade } from "svelte/transition"
import { objectiveList } from "../../data/gameData.js"
import { objectives } from "../../data/currentData.js"
import { emitObjectives } from "../../socket.js"

// Split up text into list of two (before and after trigger word)
objectiveList.map(item => item.text = item.text.split(item.trigger))
</script>

<style>
span {
  color: var(--color-checked);
  font-weight: bold;
}
</style>

<article>
  <slot/>
    {#each objectiveList as objective}
      {#if $objectives.length < 3 || $objectives.includes(objective.value)}
        <label class="control control-checkbox" transition:fade>
          {objective.text[0]} <span>{objective.trigger}</span> {objective.text[1]}
          <input type="checkbox" name="check" value={objective.value} bind:group={$objectives} on:change={emitObjectives($objectives)}/>
          <div class="control_indicator"></div>
        </label>
      {/if}
    {/each}
</article>
