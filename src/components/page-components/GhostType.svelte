<script>
import { fade } from "svelte/transition"
import ResetButton from "../ResetButton.svelte"
import { ghostList } from "../../data/gameData.js"
import { gatheredEvidence } from "../../data/currentData.js"

let ghosts = ghostList
gatheredEvidence.subscribe(() => {
  filterGhosts()
})

function filterGhosts() {
  ghosts = ghostList
  Object.keys($gatheredEvidence).forEach((evidence, i) => {
    // True is evidence confirmed, false is evidence ruled out
    if ($gatheredEvidence[evidence] === true) {
      ghosts = ghosts.filter(ghost => ghost.evidence.includes(evidence))
    }
    else if ($gatheredEvidence[evidence] === false) {
      ghosts = ghosts.filter(ghost => !ghost.evidence.includes(evidence))
    }
  })
}
</script>

<style>
article {
  min-height: 20rem;
}

.ghost-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 30rem) {
  .ghost-list {
    grid-template-columns: 1fr;
  }
}

.ghost {
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}

.ghost > * {
  margin-right: 0.4rem;
}

.ghost span {
  margin-right: 0;
  margin-left: 0.8rem;
}

.ghost .evidence-gathered {
  opacity: 0.25;
}

.ghost img {
  width: 2rem;
  height: 2rem;
}

p {
  margin-top: 0.5rem;
}
</style>

<article>
  <slot/>
  <div class="ghost-list">
  {#each ghosts as ghost}
    <div class="ghost" transition:fade="{{duration: 300}}">
      {#each ghost.evidence as evidence}
        {#if $gatheredEvidence[evidence] !== true}
          <img src={`resources/icons/${evidence}.svg`} alt={evidence}>
        {/if}
      {/each}
      {#each ghost.evidence as evidence}
        {#if $gatheredEvidence[evidence] === true}
          {#if ghosts.length > 1}
            <img class="evidence-gathered" src={`resources/icons/${evidence}.svg`} alt={evidence}>
          {:else}
            <img src={`resources/icons/${evidence}.svg`} alt={evidence}>
          {/if}
        {/if}
      {/each}
      <span>{ghost.name}</span>
    </div>
  {/each}
  </div>
  {#if ghosts.length === 0}
    <p in:fade="{{duration: 300, delay: 100}}">
      No ghost has been identified by your combination of evidence.
    </p>
  {/if}
  {#if ghosts.length === 1}
    <p in:fade="{{duration: 300, delay: 100}}">
      Don't forget to select the right ghost in your journal :)
    </p>
    <ResetButton floating={false}/>
  {/if}
</article>
