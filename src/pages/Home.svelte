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
		<Button text="About Me" icon="fa-solid fa-circle-info"/>
		<Button text="Education" to="/education" done icon="fa-solid fa-graduation-cap"/>
		<Button text="Experience" icon="fa-solid fa-ranking-star"/>
		<Button text="Portfolio" icon="fa-solid fa-book-open"/>
		<Button text="Github" to="https://github.com/mj-adendorff" done icon="fa-brands fa-github"/>
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