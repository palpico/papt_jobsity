export function getBooks(url) {
    let httpreq = new XMLHttpRequest();
    httpreq.overrideMimeType("application/json");
    httpreq.open("GET", url, true);
    httpreq.onreadystatechange = function () {
        if (httpreq.readyState === 4) {
            console.log(httpreq.responseText);
        }
    };
    httpreq.send(null);
    // return JSON.parse(httpreq.responseText).items;
    console.log(httpreq.responseText);
}


export function postBook(url, data) {
    let httpreq = new XMLHttpRequest();
    httpreq.open("POST", url, true);
    httpreq.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    httpreq.onreadystatechange = function () {
        if (httpreq.readyState === 4) {
            console.log(httpreq.responseText);
        }
    };
    httpreq.send(JSON.stringify(data));
}