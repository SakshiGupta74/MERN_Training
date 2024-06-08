import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



const HistoryInformationPage = (props) =>{
    // const {userpoints,setUserpoints} = props;
    const [data,setData] = useState();

    const params = useParams();
    const historyId = params.historyId;

const customStyles = {
    color:'white',
    padding:'48px',

}

const getData = async() => {
    try{
    const res = await fetch(`https://dummyjson.com/products/search?q=${historyId}`);
    const obj = await res.json;
    setData(obj);
    // console.log(data);
}
catch(err){
    console.log(err);
}
}


useEffect(() => {
    getData();
}, []);


return(
    <div style={customStyles}>
    <h3> info of:{historyId}</h3>
    <img src = {data?.thumbnail}/>
    <img src = {data?.images?.[0]}/>

    </div>
)
}

export default HistoryInformationPage;