import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
    const str = "(req, res) => { console.log('under construction') }";
    return (
        <main>
            <h1 class="name">MJ Adendorff</h1>
            <h3 class="subname">Fullstack Software Developer</h3>
            <br />
            <code>{str}</code>
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
        </main>
    );
}
