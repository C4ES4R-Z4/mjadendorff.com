import type { Component } from "solid-js";

// Page 1
const One: Component = () => {
    const main: any = {
        "background-color": "#3AB0FF",
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
        gap: "20px",
    };
    const name: any = {
        color: "white",
        "font-size": "60px",
        "font-weight": "900",
        "text-transform": "uppercase",
    };
    const arrow: any = {
        margin: "0",
        "font-size": "100px",
        color: "white",
        "font-weight": "700",
        padding: "0",
    };
    return (
        <>
            <div style={main}>
                <div style={container}>
                    <div style={arrow}>{"<"}</div>
                    <div style={name}>MJ Adendorff</div>
                    <div style={arrow}>{" />"}</div>
                </div>
            </div>
        </>
    );
};

// Page 2
const Two: Component = () => {
    const style: any = {
        "background-color": "#FFB562",
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

// Page 2
const Three: Component = () => {
    const style: any = {
        "background-color": "#F87474",
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
const App: Component = () => {
    return (
        <div>
            <One />
            <Two />
            <Three />
        </div>
    );
};

export default App;
