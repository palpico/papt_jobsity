let bookshelf = [];

export async function getBooks(url) {
    let httpreq = new XMLHttpRequest();
    httpreq.overrideMimeType("application/json");
    httpreq.open("GET", url, true);
    httpreq.onreadystatechange = await function () {
        if (httpreq.readyState === 4) {
            bookshelf = [];
            bookshelf = JSON.parse(httpreq.responseText);
        }
        bookshelf
    };
    bookshelf
    httpreq.send(null);
}

export async function postBook(url, data) {
    let httpreq = new XMLHttpRequest();
    httpreq.open("POST", url, true);
    httpreq.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    httpreq.onreadystatechange = await function () {
        if (httpreq.readyState === 4) {
            console.log(httpreq.responseText);
        }
    };
    httpreq.send(JSON.stringify(data));
}
