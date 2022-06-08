import { createSignal, For } from "solid-js";
import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
    const [backStyle, setBackStyle] = createSignal("black");

    const str = ["(req, res) => {", "console.log('under construction')", "}"];
    const arr = ["white", "black"];

    return (
        <main
            class={backStyle()}
            onClick={() => {
                setBackStyle(backStyle() == arr[0] ? arr[1] : arr[0]);
            }}
        >
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
            <h1 class="name">MJ Adendorff</h1>
            <h3 class="subname">Fullstack Software Developer</h3>
            <br />
            <div style={{ width: "18rem" }}>
                <For each={str} fallback={<div>Loading...</div>}>
                    {(value, key) => (
                        <code>
                            {value}
                            <br />
                        </code>
                    )}
                </For>
            </div>
        </main>
    );
}
