const bookAPI = 'http://localhost:9000/book';
const booksDisplayed = 14;

let myBooks = [];

function getBookInfo(url) {
    let Httpreq = new XMLHttpRequest(); // new request
    Httpreq.overrideMimeType("application/json");
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    let books = JSON.parse(Httpreq.responseText).books;
    return books;
}

async function getBooks(url) {
    let httpreq = new XMLHttpRequest();
    httpreq.overrideMimeType("application/json");
    httpreq.open("GET", url, true);
    httpreq.onreadystatechange =await function () {
        if (httpreq.readyState === 4) {
            myBooks=JSON.parse(httpreq.responseText);
        }
    };
    httpreq.send(null);
}

let test1 = getBookInfo(bookAPI);
test1
