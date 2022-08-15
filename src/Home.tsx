import type { Component } from "solid-js";
import { AiOutlineCode } from "solid-icons/ai";
import { Certificate } from "./components/Certificate";
// Page 1
const One: Component = () => {
    const main: any = {
        "background-color": "#091069",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        width: "100%",
    };
    const container: any = {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
        gap: "20px",
    };
    const name: any = {
        color: "white",
        "font-size": "60px",
        "font-weight": "900",
        "text-transform": "uppercase",
    };
    const logo: any = {
        "background-color": "#BDCCDA",
        "border-radius": "50%",
        color: "white",
        "font-size": "80px",
        padding: "25px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        margin: "0",
    };
    const subName: any = {
        color: "#BDCCDA",
    };
    return (
        <>
            <div style={main}>
                <div style={container}>
                    <div style={logo}>
                        <AiOutlineCode color={"#091069"} />
                    </div>
                    <div style={name}>MJ Adendorff</div>
                    <div style={subName}>Software Developer & Cat Person</div>
                </div>
            </div>
        </>
    );
};

// Page 2
const Two: Component = () => {
    const style: any = {
        "background-color": "#2B4D9D",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "min-height": "100vh",
        width: "100%",
        color: "green",
    };
    const certs: any = {
        width: "100%",
        color: "white",
    };
    const timelineContainer: any = {};
    return (
        <div style={style}>
            <div style={certs}>
                <Certificate
                    name="BSC"
                    image="/degree.jpg"
                    desc="My Math degree"
                />
            </div>
            <div style={timelineContainer}></div>
        </div>
    );
};

// Page 2
const Three: Component = () => {
    const style: any = {
        "background-color": "#95ABD0",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        width: "100%",
        color: "green",
    };
    return (
        <>
            <div style={style}>Hello</div>
        </>
    );
};
// The Page Layout
const Home: Component = () => {
    return (
        <div>
            <One />
            <Two />
            <Three />
        </div>
    );
};

export default Home;
