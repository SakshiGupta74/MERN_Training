console.log("APP started")

function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=33f37b9830b14b21a51172f238ac45b2")
        .then((res) => res.json()
            .then((data) => {
                /renderUI(data);
                //console.log(data)
            })
        )
}
callAPI()
//https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=33f37b9830b14b21a51172f238ac45b2

const root = document.getElementById("root")
function renderUI(data) {
    //got the articles from data
    const articles = data.articles;
    for(let i=0;i<articles.length;i++){
    const ar=articles[i];

    //single article from the article array
    // const ar=articles[2];
    console.log(ar.title);

    //created parent div
    const div = document.createElement("div");
    div.setAttribute("class","news-card");

    const h3=document.createElement("h3");
     h3.innerText=ar.title;
    div.appendChild(h3)

    const img=document.createElement("img");
    img.src = ar.urlToImage;
    img.style = "height: 200px"
    div.appendChild(img);

    const p=document.createElement("p");
    p.innerText=ar.description;
    div.appendChild(p)



    //div.innerText = ar.title;
    root.appendChild(div);
}
}
callAPI()
