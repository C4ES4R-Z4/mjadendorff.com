<script>
    export let text;
    export let to = "/";
    export let external = false;
    export let done = false;
    import {push} from 'svelte-spa-router'

    function navigate() {
        if (external || to.includes("http")) {
            window.location = to;
        } else {
            push(to);
        }
    }

    const hoverColour = () => {
        if (done) {
            return "lightgreen";
        }
        return "red";
    }
</script>

<main style="--hoverColour: {hoverColour()}">
    <button class="button" on:click={navigate}>
        {text}
    </button>
</main>

<style lang="less">
    .button {
        background-color: black;
        color: white;
        font: inherit;
        width: 120px;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
        font-size: 17px;
		border: 2px solid white;
        &:hover {
            cursor: pointer;
            color: black;
            background-color: var(--hoverColour);
            border: 2px solid grey;
            transition: 0.5s;
            &::before {
                content: ">>\0020";
            }
        }
    }
</style>