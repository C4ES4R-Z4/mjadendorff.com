import type { Component } from "solid-js";
import type {} from "solid-styled-jsx";

const App: Component = () => {
    return (
        <>
            <div class="main">Hello World</div>
            <style jsx dynamic>{`
                .main {
                    background-color: black;
                    color: green;
                    height: 100vh;
                    widht: 100%;
                    padding: 50px;
                    padding-left: 100px;
                    padding-right: 100px;
                }
            `}</style>
        </>
    );
};

export default App;
