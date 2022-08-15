import { Certificate } from "./components/Certificate";

export default function Two() {
    const style: any = {
        "background-color": "#2B4D9D",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "min-height": "100vh",
        width: "100%",
        color: "green",
    };
    const certs: any = {
        width: "100%",
        color: "white",
    };
    const timelineContainer: any = {};
    return (
        <div style={style}>
            <div style={certs}>
                <Certificate
                    name="BSC"
                    image="/degree.jpg"
                    desc="My Math degree"
                />
            </div>
            <div style={timelineContainer}></div>
        </div>
    );
}
