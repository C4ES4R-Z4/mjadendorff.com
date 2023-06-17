import matricImage from "./assets/matric.png";
import honoursImage from "./assets/honours.jpg";
import bscImage from "./assets/bsc.jpg";

export let data = {
    "education": [
        {
            "name": "NSC",
            "startYear": 2012,
            "finishYear": 2016,
            "description": "Attended Paul Roos Gymnasium in Stellenbosch between 2012 and 2016.",
            "image": matricImage
        },
        {
            "name": "BSc",
            "startYear": 2018,
            "finishYear": 2020,
            "description": "Did my 3 year BSC at Stellenbosch University with a double-major in Applied Mathematics and Computer Science.",
            "image": bscImage
        },
        {
            "name": "BSc (Honours)",
            "startYear": 2021,
            "finishYear": 2022,
            "description": "Did my Honours year in 2021, completing all modules by the end of the year, got extended year project to February due to Covid. \
                My Honours project was titled: \"Deep Learning For Leafrol Disease Detection\"",
            "image": honoursImage
        }
    ]
}