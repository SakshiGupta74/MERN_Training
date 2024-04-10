console.log("app started");

function fetchAPI() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?key=DH7JVZCBWNK6EGUX5WGQ5W9MV")
         .then((res) => res.json()
         .then((data) => {
        // console.log(data);
         renderUI(data)
        })
    )
}
// fetchAPI();
const root=document.getElementById("root");
function renderUI(mydata){
    console.log(mydata);
    const data = mydata.days;
    
    let tr = document.createElement("tr")
    root.appendChild(tr);
    const th = document.createElement("th")
    th.innerText="Date";
    tr.appendChild(th)

    const th1=document.createElement("th")
    th1.innerText="max-temp";
    tr.appendChild(th1)

    const th2=document.createElement("th")
    th2.innerText="min-temp";
    tr.appendChild(th2);

    let row = document.createElement("tr");
    for(let i = 0;i<data.length;i++){
        row=document.createElement("tr");
        root.appendChild(row);

        let td = document.createElement("td");
        td.innerText = data[i].datetime;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = data[i].tempmax;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = data[i].tempmin;
        row.appendChild(td);
    }
}
fetchAPI();

