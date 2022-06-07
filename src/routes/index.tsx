import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
    const str = "(req, res) => { console.log('under construction') }";
    return (
        <main>
            <h1>MJ Adendorff</h1>
            <h3>Fullstack Software Developer</h3>
            <br />
            <code>{str}</code>
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
        </main>
    );
}
