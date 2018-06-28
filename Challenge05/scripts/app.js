'use strict'

const singleBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
const apiKey = '&key=AIzaSyAEHBpR09JoTqLw78jIthVwAjL8PCLQ_80';
const booksDisplayed = 14;

const myJSONUrl = 'https://raw.githubusercontent.com/palpico/papt_jobsity/develop/Challenge05/Bookinfo.json';
let myBooks = getBookInfo(myJSONUrl);
let books = addInfo(myBooks);

window.onload = function () {
    drawCardContent(books, booksDisplayed);
    document.getElementById('btnCard').addEventListener('click', cardDisplay);
    document.getElementById('btnList').addEventListener('click', listDisplay);
};

function getBookInfo(url) {
    let Httpreq = new XMLHttpRequest(); // new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText).items;
}

//complete book information
function addInfo(param) {
    for (let i = 0; i < param.length; i++) {
        let completeInfo = getBookInfo(singleBookUrl + param[i].isbn + apiKey);
        param[i].title = completeInfo[0].volumeInfo.title;
        param[i].authors = completeInfo[0].volumeInfo.authors;
        param[i].publishedDate = completeInfo[0].volumeInfo.publishedDate;
        param[i].pageCount = completeInfo[0].volumeInfo.pageCount;
        param[i].description = completeInfo[0].volumeInfo.description;
        param[i].thumbnail = completeInfo[0].volumeInfo.imageLinks.thumbnail;
    }
    return param;
}

function clearBookshelf() {
    const parent = document.getElementById("covers");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

//draw book information
function drawCardContent(info, quantity) {
    clearBookshelf();
    let width = 0;
    let elem = document.getElementById("progressBar");
    let progress = (100 / booksDisplayed);
    for (let i = 0; i <= quantity; i++) {
        // language=HTML
        let text = `
        <div class="mdl-cell--20-col mdl-cell--4-col-tablet mdl-cell--4-col-phone book_cover" id="book_${i}">
            <div class="layout-card" id="layout-card${i}" onclick="modalFunction(${i})">
                <img class="img" src="${info[i].thumbnail}">
                </img>
                <div class="mdl-card__title">
                <b class="truncate light-blue">${info[i].title}</b>
                </div>
                <div class="mdl-card__supporting-text">
                ${info[i].authors}
                </div>
                <i class="material-icons icons-star light-blue">
                star star_half star_border
                </i>
                </div>
                <!--The Modal -->
                <div id="myModal${i}" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <span class="close${String(i)}">&times;</span>
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone">
                            </div>
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--hide-phone">
                                <img class="img-big" src="${info[i].thumbnail}" alt="logo">
                            </div>
                            <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone 
                                modal-content-tittle">
                                <div class="modal-content">
                                    <ul class="list-modal-content">
                                        <li class="wrap-text-modal mclb"><b>${info[i].title}</b> -
                                        - <b class="mcg">${info[i].publishedDate.slice(0, 4)}</b></li>
                                        <li class="wrap-text-modal mcg">
                                            <span style="color: #FFFFFF">by </span>${info[i].authors}</li>
                                        <li class="wrap-text-modal mcw">${info[i].pageCount} pages</li>
                                        <br>
                                        <li class="wrap-text-modal mcg"><b>SUMMARY</b></li>
                                        <li class="wrap-text-modal mcw">${info[i].description}</li>
                                        <li class="wrap-text-modal">    
                                            <button class="mdl-button mdl-js-button mdl-button--raised 
                                            mdl-js-ripple-effect mdl-button--primary">
                                                Reserve
                                            </button>
                                            <button class="mdl-button mdl-js-button mdl-button--raised 
                                            mdl-js-ripple-effect mdl-button--primary">
                                                <i class="material-icons icons-star light-blue">favorite</i>
                                            </button>
                                            <button class="mdl-button mdl-js-button mdl-button--raised 
                                            mdl-js-ripple-effect mdl-button--primary">
                                                <i class="material-icons icons-star light-blue">bookmark</i>
                                            </button>
                                        </li>
                                        <li>
                                        Rating: 
                                        <a class="mdl-button mdl-js-button">
                                                <i class="material-icons icons-star light-blue">
                                                star star_half star_border
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layout-list" id="layout-list${i}">
                <div class="list-button" onclick="modalFunction(${i})">
                    <b class="wrap-text-modal mclb"><b>${info[i].title}</b> -
                    - <b class="mcg">${info[i].publishedDate.slice(0, 4)}</b></b>
                    <b class="wrap-text-modal mcg">by ${info[i].authors}
                        <b class="wrap-text-modal mcw">${info[i].pageCount} pages</b>
                    </b>
                </div>
            </div>
        </div>
        `;
        document.getElementById("covers").insertAdjacentHTML('afterbegin', text);
        if (width + progress < 100) {
            width = width + progress;
            elem.style.width = width + '%';
            elem.innerHTML = Math.round(width) + '%';
        } else {
            elem.style.display = 'none';
        }
    }
}


function modalFunction(coverNumber) {
    let modal = document.getElementById('myModal' + coverNumber);// Get the modal
    let span = document.getElementsByClassName("close" + coverNumber)[0]; // element that closes the modal
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function listDisplay() {
    for (let i = 0; i <= booksDisplayed; i++) {
        let elemCard = document.getElementById('book_' + i);
        elemCard.style.display = 'none';
        let elemList = document.getElementById('layout-list' + i);
        elemList.style.display = 'block';
    }
}

function cardDisplay() {
    for (let i = 0; i <= booksDisplayed; i++) {
        let elemCard = document.getElementById('book_' + i);
        elemCard.style.display = '';
        let elemList = document.getElementById('layout-list' + i);
        elemList.style.display = 'none';
    }
}

function locations(objects, toSearch) {
    let locationBy = objects.filter(objects => objects.location === toSearch);
    drawCardContent(locationBy, locationBy.length)
}