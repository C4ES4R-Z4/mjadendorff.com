import { createSignal, For } from "solid-js";
import Button from "~/components/Button";
import Cookies from "js-cookie";
import "./index.css";

export default function Home() {
    if (Cookies.get("theme") == undefined) {
        Cookies.set("theme", "light");
    }
    const [style, setStyle] = createSignal(Cookies.get("theme"));

    setInterval(() => {
        const style = Cookies.get("theme") == "light" ? "light" : "dark";
        setStyle(style);
    }, 100);

    return (
        <main class={style()}>
            <Button props={{ isActive: true }} />
            <h1 class="name">MJ Adendorff</h1>
            <h3 class="subname">Fullstack Software Developer</h3>
            <code>Portfolio Under Construction</code>
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
        </main>
    );
}
