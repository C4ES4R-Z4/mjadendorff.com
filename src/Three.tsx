import { createUseStyles } from "react-jss";

export default function Three() {
    const classes = styles();
    return (
        <>
            <div className={classes.main}>Hello</div>
        </>
    );
}

const styles = createUseStyles({
    main: {
        backgroundColor: "#95ABD0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        color: "green",
    },
});
