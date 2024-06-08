import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./History.css";

const History = () => {
    // let data = [
    //     {'id':'1', title:'hello'},
    //     {'id':'2', title:'world'},
    // ];
    const [data, setData] = useState([]);
    const [searchText,setSearchText] =useState("");

    const getData = async() => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        // data = obj.products;
        setData(obj.products);
        // console.log('getData::',data);
    }
    useEffect(() => {
        getData();
    }, [searchText]);

    console.log('normal rendering flow',data)

    return (
        <div>
            <Navbar />
            <input className="search-box-input" onchange = {(e) =>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return(
                        <div className='history-card'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <Link to={`/history/${item.id}`}>More</Link>
                        </div>
                    )
                
                })}
            </div>
        </div>
    )
};

export default History;