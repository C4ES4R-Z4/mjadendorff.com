<script>
	import Button from "../lib/Button.svelte";
</script>

<main>
	<div class="heading">
		<div>
			<h1>MJ Adendorff</h1>
			<h3>Software Developer</h3>
		</div>
	</div>
	<div class="buttons">
		<Button text="About Me" />
		<Button text="Education" to="/education" done />
		<Button text="Experience" />
		<Button text="Portfolio" />
		<Button text="Github" to="https://github.com/mj-adendorff" done/>
	</div>
</main>

<style lang="less">
	.heading {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h3 {
		color: lightblue;
		&::before {
			content: ">>\0020";
		}
		&:hover {
			&::before {
				content: "<<\0020";
			}
			&::after {
				content: "\0020at";
			}
		}
	}
	.buttons {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		padding: 30px;
		justify-content: center;
		align-items: center;
		max-width: 500px;
	}
</style>