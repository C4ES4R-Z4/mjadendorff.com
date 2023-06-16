<script>

    // props
    export let image;
    export let name;
    export let description = "...";
    export let startYear;
    export let finishYear;
    // local variables
    let highlight;
    let display = true;
    let frame;

    // function that makes the highlight element move
    function highlightMove() {
        try {
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
        } catch(err) {
            // this just catches undefined etc errors.
        };
    }

    // function that "swings" the degree frame for tbe description
    function swing() {
        try {
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
        } catch(err) {
            // this just catches undefined etc errors.
        };
    }

</script>

<main>
    <div bind:this={frame} class="frame" on:keypress={() => {}} on:click={() => {swing()}} on:mouseenter={() => highlightMove()}>
        <h2>{name}</h2>
        <div>{startYear} - {finishYear}</div>
        {#if display}
            <div id="highlight" bind:this={highlight}></div>
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
        user-select: none;
        display: flex;
        gap: 2px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        box-sizing: border-box;
    }
    .description {
        height: 520px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
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