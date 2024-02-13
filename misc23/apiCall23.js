async function makeApiCall31() {
    var res = await fetch('https://upload.wikimedia.org/wikipedia/commons/1/14/Sher_Khan_%28cropped%29.jpg');
    var imgContent = await res.blob();
    const imgUrl = URL.createObjectURL(imgContent);
    const imageElement = document.createElement("img");
    
    imageElement.src = imgUrl;
    imageElement.width = '500';
    imageElement.height = '500'

    const container = document.getElementById("image23");
    container.appendChild(imageElement);
}


async function makeApiCall32() {
    var res = await fetch('http://localhost:3033/cors23/path23');
    const contentType = res.headers.get("content-type");
    if(contentType == 'application/json') {
        res = await res.json();    
    } else if(contentType.includes('text')) {
        res = await res.text();
    }
    console.log(res);
}

async function makeApiCall33() {
    let options23 = {
        method: 'POST',
        url: `https://jsonplaceholder.typicode.com/posts`,
        'Content-type': 'application/json',
        data: {
            title: 'na peru title',
            body: 'muscular & athletic'
        },
        headers: { 'dummy-header': 'urike unko header add chesaa'}
    }
    let resp = await axios(options23);
    console.log(resp.data);
}