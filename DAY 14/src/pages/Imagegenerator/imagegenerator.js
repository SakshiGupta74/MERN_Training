import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"
import { useState, useContext } from "react";

const ImageGenerator = (props) => {
    const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        cValue.setUserPoints(cValue.userPoints - 1);
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
                method: "POST",
                body: JSON.stringify({
                    searchText: searchText,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("authorization"),

                },
            });
            const data = await res.json();
            if (data?.status === 'success') {
                setImgSrc(data.data.imageUrl);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar page="imageGenerator" />
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} />
                    <input onChange={(e) => { func(e) }} />
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default ImageGenerator;