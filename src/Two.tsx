import { Certificate } from "./components/Certificate";
import { createUseStyles } from "react-jss";

export default function Two() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <div className={classes.heading}>EDUCATION</div>
            <div className={classes.certs}>
                <Certificate
                    name="National Senior Sertificate"
                    image=""
                    desc="MJ's NSC"
                />
                <Certificate
                    name="Bachelor of Science"
                    image="/degree.jpg"
                    desc="MJ's BSC"
                />
                <Certificate
                    name="Bachelor of Science Honours"
                    image=""
                    desc="MJ's BSc (Hons)"
                />
            </div>
            <div className={classes.timelineContainer}></div>
        </div>
    );
}

const styles = createUseStyles({
    main: {
        backgroundColor: "#2B4D9D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        color: "green",
        flexDirection: "column",
        gap: "10px",
    },
    certs: {
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    heading: {
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "40px",
        color: "white",
        fontWeight: "bold",
    },
    timelineContainer: {},
});
