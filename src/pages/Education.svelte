<script>
	import Frame from "../lib/Frame.svelte";
	import BSC from "../assets/bsc.jpg";
	import NSC from "../assets/matric.png";
	import HSC from "../assets/honours.jpg";
</script>

<main>
	<div class="holder">
		<Frame name="National Senior Certificate" startYear="2012" finishYear="2016" image={NSC}/>
		<Frame name="Bachelor's of Science" startYear="2018" finishYear="2020" image={BSC}/>
		<Frame name="Bachelor's of Science Honours" startYear="2021" finishYear="2021" image={HSC}/>
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