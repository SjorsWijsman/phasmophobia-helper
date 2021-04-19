<script>
import { evidenceList } from "../../data/gameData.js" 
import { gatheredEvidence } from "../../data/currentData.js" 
import { emitEvidence } from "../../socket.js"

let selection = {confirmed: [], ruledOut: []} 
gatheredEvidence.subscribe(value => {
  updateSelection() 
}) 

function updateData(e, evidence, value) {
  // Remove evidence from other selection
  let otherValue = "confirmed" 
  if (value == "confirmed") otherValue = "ruledOut" 
  selection[otherValue] = selection[otherValue].filter(item => item !== evidence) 

  // Convert selection to gatheredEvidence
  let valueBool = undefined 
  if (selection.confirmed.includes(evidence)) valueBool = true 
  else if (selection.ruledOut.includes(evidence)) valueBool = false 

  gatheredEvidence.update(value => {
    value[evidence] = valueBool 
    return value 
  }) 
}

// Convert gatheredevidence to selection
function updateSelection() {
  selection = {confirmed: [], ruledOut: []} 
  Object.keys($gatheredEvidence).forEach((item, i) => {
    if ($gatheredEvidence[item] !== undefined) {
      if ($gatheredEvidence[item] === true) {
        selection.confirmed.push(item)
      }
      else if ($gatheredEvidence[item] === false) {
        selection.ruledOut.push(item)
      }
    }
  }) 
}
</script>

<style>
.table {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 3fr;
}

.table h2 {
  text-align: center;
}

.table label {
  margin: 0 auto;
  margin-bottom: 1.6rem;
}

.table > div {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}

.table img {
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
}
</style>

<article>
  <slot/>
  <div class="table">
    <h2 style="colspan: 2">Confirmed</h2>
    <h2>Ruled Out</h2>
    <h2>Type of Evidence</h2>
    {#each evidenceList as evidence}
      <label class="control control-checkbox">
        <input type="checkbox" value={evidence.value} bind:group={selection.confirmed} on:change={(e) => updateData(e, evidence.value, "confirmed"), emitEvidence($gatheredEvidence)} />
        <div class="control_indicator"></div>
      </label>
      <label class="control control-checkbox">
        <input type="checkbox" value={evidence.value} bind:group={selection.ruledOut} on:change={(e) => updateData(e, evidence.value, "ruledOut"), emitEvidence($gatheredEvidence)} />
        <div class="control_indicator"></div>
      </label>
      <div>
        <img src={`resources/icons/${evidence.value}.svg`} alt={evidence.title}>
        {evidence.title}
      </div>
    {/each}
  </div>
</article>
