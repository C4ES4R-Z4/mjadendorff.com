import type { Component, JSXElement } from "solid-js";
import type {} from "solid-styled-jsx";

function One(): JSXElement {
    return (
        <>
            <div class="main">MJ Adendorff</div>
            <style jsx dynamic>{`
                .main {
                    background-color: black;
                    color: green;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
}

const App: Component = () => {
    return <One />;
};

export default App;
