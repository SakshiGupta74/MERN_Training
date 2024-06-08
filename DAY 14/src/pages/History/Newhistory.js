import Navbar from "../common/Navbar/navbar";
import { useState, useEffect } from "react";
import "./History.css";


const History = () => {
    const [searchQuery, setSearchQuery] = useState("");
    // const [title,setData] = useState("Title of Image");
    const [imageUrl, setImageUrl] = useState("url of image");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const getData = async () => {

        const res = await fetch(`https://source.unsplash.com/random/400x400/?${searchQuery}`);
        // const obj = await res.json();
        setImageUrl(res.url);
    }
    useEffect(() => {
        if (searchQuery) {
            getData();
        }
    }, [searchQuery]);
    ;

    return (
        <div>
            <Navbar />
            <div className="history-main-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for an image"
                />
                <button onClick={getData} className="search-button">Search Image</button>
                
                    {imageUrl && <img src={imageUrl} className="image" alt="Random from Unsplash" />}
                

            </div>
        </div>
    );
};

export default History;
