import { createSignal, For } from "solid-js";
import Button from "~/components/Button";
import "./index.css";

export default function Home() {
    const [backStyle, setBackStyle] = createSignal("white");

    const str = ["(req, res) => {", "console.log('under construction')", "}"];
    const arr = ["white", "black"];
    const [active, setActive] = createSignal(true);

    return (
        <main class={backStyle()}>
            <Button props={{ isActive: active() }} />
            <h1 class="name">MJ Adendorff</h1>
            <h3 class="subname">Fullstack Software Developer</h3>
            <p>{active().toString()}</p>
            <br />
            <div style={{ width: "16rem" }}>
                <For each={str} fallback={<div>Loading...</div>}>
                    {(value, key) => (
                        <code>
                            {value}
                            <br />
                        </code>
                    )}
                </For>
            </div>
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
        </main>
    );
}
