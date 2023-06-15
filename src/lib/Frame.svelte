<script>
    export let image;
    export let name;
    export let description = "...";
    export let startYear;
    export let finishYear;
    let highlight;
    let display = true;
    let frame;

    function highlightMove() {
        if (highlight) {
            highlight.style.top = "-200px";
            highlight.style.left = "-400px";
            let counter = -400;
            let int = setInterval(() => {
                highlight.style.top = `-200px`;
                highlight.style.left = `${counter}px`;
                if (counter > 700) {
                    clearInterval(int);
                }
                counter += 15;
            }, 1);
        }
    }

    function swing() {
        if (frame) {
            let counter = 0;
            let direction = "in";
            let int = setInterval(() => {
                frame.style.transform = `rotateY(${counter}deg)`;
                direction === "in" ? counter += 2 : counter -= 2;
                if (counter == 90) {
                    display = !display;
                    direction = "out";
                }
                if (counter == 0) {
                    clearInterval(int);
                }
            }, 1);
        }
    }

</script>

<main>
    <div bind:this={frame} class="frame" on:keypress={() => {}} on:click={() => {swing()}} on:mouseenter={() => highlightMove()}>
        <div id="highlight" bind:this={highlight}></div>
        <h2>{name}</h2>
        <div>{startYear} - {finishYear}</div>
        {#if display}
            <div class="holder">
                <img src={image} alt="" width="400px" height="520px"/>
            </div>
        {:else}
            <div class="description">
                {description}
            </div>
        {/if}
        
    </div>
</main>

<style lang="less">
    .frame {
        font-family: Helvetica, sans-serif;
        background-color: darkslategrey;
        border: 1px solid grey;
        padding: 10px;;
        position: relative;
        display: flex;
        gap: 2px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
    }
    .description {
        height: 520px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .holder {
        display: flex;
    }
    #highlight {
        background-color: rgba(255, 255, 255, 0.483);
        position: absolute;
        height: 1000px;
        width: 200px;
        transform: rotate(-30deg);
        left: -400px;
        filter: blur(15px);
        top: -200px;
    }
</style>