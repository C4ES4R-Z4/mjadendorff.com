import One from "./One";
import Two from "./Two";
import Three from "./Three";
import { createUseStyles } from "react-jss";

function UnderConstruction() {
    const classes = styles();
    return (
        <div className={classes.constructionContainer}>
            <div>UNDER CONSTRUCTION (PREVIEW)</div>
        </div>
    );
}

// The Page Layout
const Home = () => {
    return (
        <div style={{ width: "100%" }}>
            <One />
            <Two />
            <Three />
            <UnderConstruction />
        </div>
    );
};

const styles = createUseStyles({
    constructionContainer: {
        position: "fixed",
        minWidth: "40%",
        textAlign: "center",
        color: "black",
        fontWeight: "bolder",
        fontSize: "1.8em",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -20%)",
        padding: "20px",
        backgroundColor: "yellow",
        borderRadius: "10px",
        border: "2px solid black",
    },
});

export default Home;
