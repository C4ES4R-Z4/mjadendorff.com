<script>
    export let text;
    export let to = "/";
    export let external = false;
    export let icon = "";
    export let done = false;
    import {push} from 'svelte-spa-router';
    import strip from "../assets/strip.png";

    function navigate() {
        if (external || to.includes("http")) {
            window.location = to;
        } else {
            push(to);
        }
    }

    const hoverColor = () => {
        if (done) {
            return "lightgreen";
        }
        return "tomato";
    }
</script>

<main style="--hoverColor: {hoverColor()}">
    <button class="button" on:click={navigate}>
        {#if !done}
            <div class="strip" style="background-image: {strip}"></div>
        {/if}
        <i class={icon}></i>
        <span class="text">&nbsp;{text}</span>
    </button>
</main>

<style lang="less">
    .strip {
        position: absolute;
        height: 10px;
        width: 300px;
        background-image: url("../assets/strip.png");
        background-position: center;
        background-size: cover;
        top: 10%;
        animation: construction 1s linear infinite;
    }
    @keyframes construction {
        0%  {left: 0%;}
        100% {left: -100%}
    }
    .button {
        background-color: black;
        color: white;
        font: inherit;
        width: 130px;
		height: 95px;
		display: flex;
        overflow: hidden;
        position: relative;
		align-items: center;
		justify-content: center;
        font-size: 17px;
		border: 2px solid white;
        &:hover {
            cursor: pointer;
            color: black;
            background-color: var(--hoverColor);
            border: 2px solid grey;
            transition: 0.5s;
            &::before {
                content: ">>\0020";
            }
        }
    }
</style>