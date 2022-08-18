import { AiOutlineCode } from "react-icons/ai";
import { createUseStyles } from "react-jss";

export default function One() {
	const classes = styles();
	return (
		<>
			<div className={classes.main}>
				<div className={classes.container}>
					<img src="me.jpeg" className={classes.avatar} />
					<div className={classes.name}>MJ Adendorff</div>
					<div className={classes.subName}>Software Developer && Cat Person</div>
				</div>
			</div>
		</>
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
		fontWeight: "900",
		textTransform: "uppercase",
		textAlign: "center",
		lineHeight: "60px",
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
	},
	subName: {
		color: "#BDCCDA",
	},
});
