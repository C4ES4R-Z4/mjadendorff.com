import Tilt from "react-parallax-tilt";

export function Certificate({
    name,
    image,
    desc,
}: {
    name: string;
    image: string;
    desc: string;
}) {
    return (
        <Tilt>
            <div>
                <img src={image} height="400" width="300" />;
            </div>
        </Tilt>
    );
}
