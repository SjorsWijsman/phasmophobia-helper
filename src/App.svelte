<script>
import VoiceRecognition from "./components/VoiceRecognition.svelte"
import ResetButton from "./components/ResetButton.svelte"
import Page from "./components/Page.svelte"
import JoinRoomDialogueButton from  "./components/JoinRoomDialogueButton.svelte"

import GhostName from "./components/page-components/GhostName.svelte"
import GhostResponse from "./components/page-components/GhostResponse.svelte"
import Objectives from "./components/page-components/Objectives.svelte"
import Evidence from "./components/page-components/Evidence.svelte"
import GhostType from  "./components/page-components/GhostType.svelte"
</script>

<style>
.book {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
	width: 80rem;
  max-width: 100%;
  min-height: 51rem;
	background-color: var(--color-book);
	display: grid;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
	-webkit-box-shadow: 1rem 1rem 5rem 5rem var(--color-background);
	box-shadow: 1rem 1rem 5rem 5rem var(--color-background);
}

@media only screen and (max-width: 70rem) {
  .book {
    position: relative;
    top: 0;
    transform: none;
  	grid-template-columns: 1fr;
  }
}
</style>

<VoiceRecognition/>
<ResetButton/>

<main class="book">
	<Page>
		<JoinRoomDialogueButton/>
		<h1 slot="title">Objectives</h1>
		<section slot="components">
			<GhostName>
				<h2>The ghost's name is...</h2>
			</GhostName>
			<GhostResponse>
				<h2>The ghost responds to...</h2>
			</GhostResponse>
			<Objectives>
				<h2>The objectives are...</h2>
			</Objectives>
		</section>
	</Page>
	<Page>
		<h1 slot="title">Evidence</h1>
		<section slot="components">
			<Evidence>
				<h2>We have found evidence of...</h2>
			</Evidence>
			<GhostType>
				<h2>The ghost is a...</h2>
			</GhostType>
		</section>
	</Page>
</main>