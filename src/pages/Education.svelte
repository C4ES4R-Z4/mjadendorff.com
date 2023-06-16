<script>
	import Frame from "../lib/Frame.svelte";
	import {data} from "../data.js";
</script>

<main>
	<div class="holder">
		{#each data.education as degree}
			<Frame 
				name={degree.name} 
				startYear={degree.startYear} 
				finishYear={degree.finishYear} 
				image={degree.image}
				description={degree.description}
			/>
		{/each}
	</div>
</main>

<style lang="less">
	.holder {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}
</style>