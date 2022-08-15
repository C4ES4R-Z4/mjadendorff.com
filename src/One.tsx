import { AiOutlineCode } from "react-icons/ai";

export default function One() {
    const main: any = {
        "background-color": "#091069",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        width: "100%",
    };
    const container: any = {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
        gap: "20px",
    };
    const name: any = {
        color: "white",
        "font-size": "60px",
        "font-weight": "900",
        "text-transform": "uppercase",
    };
    const logo: any = {
        "background-color": "#BDCCDA",
        "border-radius": "50%",
        color: "white",
        "font-size": "80px",
        padding: "25px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        margin: "0",
    };
    const subName: any = {
        color: "#BDCCDA",
    };
    return (
        <>
            <div style={main}>
                <div style={container}>
                    <div style={logo}>
                        <AiOutlineCode color={"#091069"} />
                    </div>
                    <div style={name}>MJ Adendorff</div>
                    <div style={subName}>Software Developer & Cat Person</div>
                </div>
            </div>
        </>
    );
}
