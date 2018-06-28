'use strict';

var singleBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
var apiKey = '&key=AIzaSyAEHBpR09JoTqLw78jIthVwAjL8PCLQ_80';
var booksDisplayed = 14;

var myJSONUrl = 'https://raw.githubusercontent.com/palpico/papt_jobsity/develop/Challenge05/Bookinfo.json';
var myBooks = getBookInfo(myJSONUrl);
var books = addInfo(myBooks);

window.onload = function () {
    drawCardContent(books, booksDisplayed);
    document.getElementById('btnCard').addEventListener('click', cardDisplay);
    document.getElementById('btnList').addEventListener('click', listDisplay);
};

function getBookInfo(url) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText).items;
}

function addInfo(param) {
    for (var i = 0; i < param.length; i++) {
        var completeInfo = getBookInfo(singleBookUrl + param[i].isbn + apiKey);
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
    var parent = document.getElementById("covers");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function drawCardContent(info, quantity) {
    clearBookshelf();
    var width = 0;
    var elem = document.getElementById("progressBar");
    var progress = 100 / booksDisplayed;
    for (var i = 0; i <= quantity; i++) {
        var text = '\n        <div class="mdl-cell--20-col mdl-cell--4-col-tablet mdl-cell--4-col-phone book_cover" id="book_' + i + '">\n            <div class="layout-card" id="layout-card' + i + '" onclick="modalFunction(' + i + ')">\n                <img class="img" src="' + info[i].thumbnail + '">\n                </img>\n                <div class="mdl-card__title">\n                <b class="truncate light-blue">' + info[i].title + '</b>\n                </div>\n                <div class="mdl-card__supporting-text">\n                ' + info[i].authors + '\n                </div>\n                <i class="material-icons icons-star light-blue">\n                star star_half star_border\n                </i>\n                </div>\n                <!--The Modal -->\n                <div id="myModal' + i + '" class="modal">\n                    <!-- Modal content -->\n                    <div class="modal-content">\n                        <span class="close' + String(i) + '">&times;</span>\n                        <div class="mdl-grid">\n                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone">\n                            </div>\n                            <div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--hide-phone">\n                                <img class="img-big" src="' + info[i].thumbnail + '" alt="logo">\n                            </div>\n                            <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone \n                                modal-content-tittle">\n                                <div class="modal-content">\n                                    <ul class="list-modal-content">\n                                        <li class="wrap-text-modal mclb"><b>' + info[i].title + '</b> -\n                                        - <b class="mcg">' + info[i].publishedDate.slice(0, 4) + '</b></li>\n                                        <li class="wrap-text-modal mcg">\n                                            <span style="color: #FFFFFF">by </span>' + info[i].authors + '</li>\n                                        <li class="wrap-text-modal mcw">' + info[i].pageCount + ' pages</li>\n                                        <br>\n                                        <li class="wrap-text-modal mcg"><b>SUMMARY</b></li>\n                                        <li class="wrap-text-modal mcw">' + info[i].description + '</li>\n                                        <li class="wrap-text-modal">    \n                                            <button class="mdl-button mdl-js-button mdl-button--raised \n                                            mdl-js-ripple-effect mdl-button--primary">\n                                                Reserve\n                                            </button>\n                                            <button class="mdl-button mdl-js-button mdl-button--raised \n                                            mdl-js-ripple-effect mdl-button--primary">\n                                                <i class="material-icons icons-star light-blue">favorite</i>\n                                            </button>\n                                            <button class="mdl-button mdl-js-button mdl-button--raised \n                                            mdl-js-ripple-effect mdl-button--primary">\n                                                <i class="material-icons icons-star light-blue">bookmark</i>\n                                            </button>\n                                        </li>\n                                        <li>\n                                        Rating: \n                                        <a class="mdl-button mdl-js-button">\n                                                <i class="material-icons icons-star light-blue">\n                                                star star_half star_border\n                                                </i>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                                \n                            </div>\n                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="layout-list" id="layout-list' + i + '">\n                <div class="list-button" onclick="modalFunction(' + i + ')">\n                    <b class="wrap-text-modal mclb"><b>' + info[i].title + '</b> -\n                    - <b class="mcg">' + info[i].publishedDate.slice(0, 4) + '</b></b>\n                    <b class="wrap-text-modal mcg">by ' + info[i].authors + '\n                        <b class="wrap-text-modal mcw">' + info[i].pageCount + ' pages</b>\n                    </b>\n                </div>\n            </div>\n        </div>\n        ';
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
    var modal = document.getElementById('myModal' + coverNumber);
    var span = document.getElementsByClassName("close" + coverNumber)[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

function listDisplay() {
    for (var i = 0; i <= booksDisplayed; i++) {
        var elemCard = document.getElementById('book_' + i);
        elemCard.style.display = 'none';
        var elemList = document.getElementById('layout-list' + i);
        elemList.style.display = 'block';
    }
}

function cardDisplay() {
    for (var i = 0; i <= booksDisplayed; i++) {
        var elemCard = document.getElementById('book_' + i);
        elemCard.style.display = '';
        var elemList = document.getElementById('layout-list' + i);
        elemList.style.display = 'none';
    }
}

function locations(objects, toSearch) {
    var locationBy = objects.filter(function (objects) {
        return objects.location === toSearch;
    });
    drawCardContent(locationBy, locationBy.length);
}
