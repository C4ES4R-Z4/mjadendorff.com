import { createSignal } from "solid-js";
import "./Button.css";

export default function Button(props: any) {
    function changeClass() {
        const sc = "circle ";
        if (props.isActive) {
            return sc + "active";
        } else {
            return sc;
        }
    }

    function handleClick() {
        props.isActive = !props.isActive;
    }

    return (
        <div class="container" onClick={handleClick}>
            <div class={changeClass()}></div>
        </div>
    );
}
