<script>
	import Frame from "../lib/Frame.svelte";
	import {data} from "../data.js";
</script>

<main>
	<div class="top-down">
		<h1>My Education</h1>
		<h3>2012 - 2022</h3>
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
	</div>
</main>

<style lang="less">
	h1 {
		color: lightblue;
	}
	.top-down {
		display: flex;
		margin: 20px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.holder {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}
</style>