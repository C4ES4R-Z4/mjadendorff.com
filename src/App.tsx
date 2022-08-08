import type { Component } from "solid-js";

// Page 1
const One: Component = () => {
    const style: any = {
        "background-color": "black",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        width: "100%",
        color: "green",
    };
    return (
        <>
            <div style={style}>MJ Adendorff</div>
        </>
    );
};

// Page 2
const Two: Component = () => {
    const style: any = {
        "background-color": "black",
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

// App
const App: Component = () => {
    return (
        <div>
            <One />
            <Two />
        </div>
    );
};

export default App;
