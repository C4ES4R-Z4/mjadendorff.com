import { createSignal } from "solid-js";
import "./Button.css";
import Cookies from "js-cookie";

export default function Button(props: any) {
    const [state, setState] = createSignal(Cookies.get("theme"));

    function changeClass() {
        const isActive = state() == "light" ? "" : "active";
        return "circle " + isActive;
    }

    function changeClassCont() {
        const isActive = state() == "light" ? "" : "cont";
        return "container " + isActive;
    }

    function handleClick() {
        if (state() == "light") {
            setState("dark");
            Cookies.set("theme", "dark");
        } else {
            setState("light");
            Cookies.set("theme", "light");
        }
    }

    return (
        <div class={changeClassCont()} onClick={handleClick}>
            <div class={changeClass()}></div>
        </div>
    );
}
