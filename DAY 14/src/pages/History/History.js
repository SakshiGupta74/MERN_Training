import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./History.css";
import HistoryCard from "./historyCard";


const History = (props) => {

    const [data, setData] = useState([]);
    const [searchText,setSearchText] =useState("");

    const getData = async() => {
        try{
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        // data = obj.products;
        setData(obj.products);
        // console.log('getData::',data);
    }
    catch(err){
        console.log(err);
    }
}

    useEffect(() => {
        getData();
    }, [searchText]);

    // console.log('normal rendering flow',data)

    return (
        <div>
            <Navbar page="history"/>
            <input className="search-box-input" onChange={(e)=>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return <HistoryCard item={item}/>
                })}
            </div>
        </div>
    )
};


export default History;