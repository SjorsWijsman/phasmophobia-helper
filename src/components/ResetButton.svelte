<script>
import { resetData } from "../data/currentData.js"

export let floating = true
</script>

<style>
button {
  color: var(--color-book-light);
  background-color: var(--color-checked);
  border: 0;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

button.floating {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 1;
  padding: 0;
  border-radius: 50%;
}

button:hover {
  background-color: var(--color-checked-dark);
  transform: scale(1.05);
}
</style>

{#if floating}
<button class="floating" type="button" on:click={() => resetData()}>Reset Book</button>
{:else}
<button type="button" on:click={() => resetData()}>Reset Book</button>
{/if}
