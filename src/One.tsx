import { AiOutlineCode } from "react-icons/ai";
import { createUseStyles } from "react-jss";

export default function One() {
	const classes = styles();
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<div className={classes.avatarContainer}>
					<img src="/me.jpeg" className={classes.avatar} draggable="false" />
					<div className={classes.spinNameBlue}></div>
					<div className={classes.spinNameGreen}></div>
					<div className={classes.spinNameRed}></div>
				</div>
				<div className={classes.name}>MJ Adendorff</div>
				<div className={classes.subName}>
					Software Developer with a keen interest in Algorithms, Data
					structures, Machine Learning and Web Development.
				</div>
			</div>
		</div>
	);
}

const styles = createUseStyles({
	main: {
		backgroundColor: "#091069",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		width: "100%",
	},
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: "20px",
	},
	name: {
		color: "white",
		fontSize: "60px",
		"@media (max-width: 600px)": {
			fontSize: "50px",
		},
		fontWeight: "900",
		textTransform: "uppercase",
		textAlign: "center",
		lineHeight: "60px",
		zIndex: 10,
		transition: "0.4s ease-in-out",
	},
	logo: {
		backgroundColor: "#BDCCDA",
		borderRadius: "50%",
		color: "white",
		fontSize: "80px",
		padding: "25px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "0",
	},
	avatar: {
		height: "200px",
		minWidth: "200px",
		maxHeight: "500px",
		maxWidth: "500px",
		borderRadius: "50%",

		border: "4px solid #BDCCDA",
		transition: "0.4s ease-in-out",
	},
	subName: {
		color: "#BDCCDA",
		width: "50%",
		minWidth: "350px",
		textAlign: "center",
		fontSize: "1.2em",
		"@media (max-width: 600px)": {
			fontSize: "1.1em",
		},
	},
	avatarContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		"&:hover ~ $name": {
			transform: "rotateY(180deg)",
			transition: "0.4s ease-in-out",
		},
		"&:hover > $spinNameBlue": {
			opacity: "1",
		},
		"&:hover > $spinNameRed": {
			opacity: "1",
		},
		"&:hover > $spinNameGreen": {
			opacity: "1",
		},
	},
	spinNameBlue: {
		position: "absolute",
		height: "110%",
		width: "110%",
		border: "5px dashed blue",
		animation: "$spin 5s linear infinite",
		opacity: "0",
	},
	spinNameRed: {
		position: "absolute",
		height: "110%",
		width: "110%",
		border: "5px dashed red",
		animation: "$spin 8s linear infinite",
		opacity: "0",
	},
	spinNameGreen: {
		position: "absolute",
		height: "110%",
		width: "110%",
		border: "5px dashed green",
		animation: "$spin 10s linear infinite",
		opacity: "0",
	},
	"@keyframes spin": {
		"0%": {
			transform: "rotate(0deg)",
		},
		"100%": {
			transform: "rotate(360deg)",
		},
	},
});
