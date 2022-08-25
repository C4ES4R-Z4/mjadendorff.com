import One from "./One";
import { createUseStyles } from "react-jss";

function UnderConstruction() {
	const classes = styles();
	return (
		<div className={classes.constructionContainer}>
			<div>
				UNDER CONSTRUCTION - Once finished this site will serve as a place for
				my public profile, education, experience and portfolio of open-source
				projects.
			</div>
		</div>
	);
}

// The Page Layout
const Home = () => {
	return (
		<div style={{ width: "100%" }}>
			<One />
			<UnderConstruction />
		</div>
	);
};

const styles = createUseStyles({
	constructionContainer: {
		position: "fixed",
		minWidth: "250px",
		textAlign: "center",
		color: "black",
		"@media (max-width: 600px)": {
			fontSize: "1.3em",
		},
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
