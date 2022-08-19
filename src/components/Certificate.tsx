import Tilt from "react-parallax-tilt";
import { createUseStyles } from "react-jss";

interface Props {
	name: string;
	image: string;
	desc: string;
	time?: string;
}

export function Certificate({ name, image, desc, time }: Props) {
	const classes = styles();
	//image === "" ? (image = "/placeholder.jpg") : "";
	const imageRender = (image: string) => {
		if (image === "") {
			return (
				<div className={classes.placeholder}>
					<p>Placeholder for</p>
					<p>{desc}</p>
				</div>
			);
		} else {
			return (
				<img
					className={classes.cert}
					src={image}
					height="400"
					width="300"
					alt={desc}
					draggable="false"
				/>
			);
		}
	};
	return (
		<Tilt
			glareEnable={true}
			glareMaxOpacity={0.5}
			glareColor="#fff"
			glarePosition="right"
			glareBorderRadius="0px">
			<div className={classes.container}>
				<p className={classes.name}>{name}</p>
				<p className={classes.time}>{time}</p>
				{imageRender(image)}
			</div>
		</Tilt>
	);
}

const styles = createUseStyles({
	cert: {
		margin: 10,
		border: "2px solid black",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		backgroundColor: "#C9A36A",
		border: "2px solid black",
	},
	name: {
		margin: 0,
		padding: 0,
		paddingTop: "10px",
		WebkitTextStroke: "0.4px black",
		fontSize: "1.3em",
		fontWeight: "bold",
		color: "black",
	},
	time: {
		margin: 0,
		padding: 0,
		fontSize: "1.1em",
		fontWeight: "bold",
		color: "black",
	},
	placeholder: {
		margin: 10,
		height: "400px",
		width: "300px",
		border: "2px solid black",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		backgroundColor: "whitesmoke",
		color: "black",
		fontSize: "1.5em",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
	},
});
