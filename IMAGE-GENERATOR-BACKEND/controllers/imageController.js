

const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTcyMzE3MTUsImV4cCI6MTcxNzMxODExNX0.sXShSsyEn88QsnvnYuLo-gySDniYmXBcjeeqkQOrJko",
                "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryPLTzcTAVUoEpBM4s",
                "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-Kn3yizAWGfBEKhh\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-Kn3yizAWGfBEKhh.png\r\n------WebKitFormBoundaryPLTzcTAVUoEpBM4s--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        imageUrl  = await res.json();   

        await imageModel.create({
            searchText: searchText,
        });
    }
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}