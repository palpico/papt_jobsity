"use strict";

var bookCoverContainer = Array.prototype.slice.call(document.getElementById("bookshelf").querySelectorAll(".book_cover"));

//Single book retrieval, slow bevause we used 15 api calls with different isbn to populate bookshelf
//let singleBookUrl='https://www.googleapis.com/books/v1/volumes?q=isbn:';
// let bookID='9781451648546';
// let book=getBookInfo(singleBookUrl+String(bookID));
// drawCardContent(book2);

//Single books retieval only one call to api, 15 results (max books returned 40)
var bulkBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript+programming+best&maxResults=15&start-index=16';

function getBookInfo(url) {
    var Httpreq = new XMLHttpRequest(); // new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText).items;
}

var books = getBookInfo(bulkBookUrl);

window.onload = drawCardContent(books);

function drawCardContent(info) {
    for (var i = 0; i <= books.length; i++) {
        // language=HTML
        var text = "\n        <div class=\"layout-card\" id=\"layout-card" + i + "\">\n            <div class=\"demo-card-square mdl-card mdl-shadow--2dp img\" onclick=\"modalFunction(" + i + ")\"\n             style=\"background-image:url('" + info[i].volumeInfo.imageLinks.thumbnail + "');\">\n            </div>\n            <div class=\"mdl-card__title\">\n            <b class=\"truncate light-blue\">" + info[i].volumeInfo.title + "</b>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n            " + info[i].volumeInfo.authors + "\n            </div>\n            <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                    <i class=\"material-icons icons-star light-blue\">star star_half star_border</i></a>\n            </div>\n            <!--The Modal -->\n            <div id=\"myModal" + i + "\" class=\"modal\">\n                <!-- Modal content -->\n                <div class=\"modal-content\">\n                    <span class=\"close" + String(i) + "\">&times;</span>\n                    <div class=\"mdl-grid\">\n                        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\">\n                        </div>\n                        <div class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--hide-phone\">\n                            <img class=\"img-big\" src=\"" + info[i].volumeInfo.imageLinks.thumbnail + "\" alt=\"logo\">\n                        </div>\n                        <div class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone \n                            modal-content-tittle\">\n                            <div class=\"modal-content\">\n                                <ul class=\"list-modal-content\">\n                                    <li class=\"wrap-text-modal mclb\"><b>" + info[i].volumeInfo.title + "</b> -\n                                    - <b class=\"mcg\">" + info[i].volumeInfo.publishedDate.slice(0, 4) + "</b></li>\n                                    <li class=\"wrap-text-modal mcg\">\n                                        <span style=\"color: #FFFFFF\">by </span>" + info[i].volumeInfo.authors + "</li>\n                                    <li class=\"wrap-text-modal mcw\">" + info[i].volumeInfo.pageCount + " pages</li>\n                                    <br>\n                                    <li class=\"wrap-text-modal mcg\"><b>SUMMARY</b></li>\n                                    <li class=\"wrap-text-modal mcw\">Lorem ipsum dolor sit amet, consectetur adipiscing \n                                    elit. Aliquam lectus tortor, posuere id mattis eget, mollis a nisl. \n                                    Vivamus gravida. </li>\n                                    <li>Rating</li>\n                                    <li>\n                                    <i class=\"material-icons icons-star light-blue\">star star_half star_border</i>\n                                    </li>\n                                    <li class=\"wrap-text-modal\">    \n                                        <button class=\"mdl-button mdl-js-button mdl-button--raised \n                                        mdl-js-ripple-effect mdl-button--primary\">\n                                            Reserve\n                                        </button>\n                                        <button class=\"mdl-button mdl-js-button mdl-button--raised \n                                        mdl-js-ripple-effect mdl-button--primary\">\n                                            <i class=\"material-icons icons-star light-blue\">favorite</i>\n                                        </button>\n                                        <button class=\"mdl-button mdl-js-button mdl-button--raised \n                                        mdl-js-ripple-effect mdl-button--primary\">\n                                            <i class=\"material-icons icons-star light-blue\">bookmark</i>\n                                        </button>\n                                        \n                                    </li>\n                                </ul>\n                            </div>\n                            \n                        </div>\n                        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"layout-list\" id=\"layout-list" + i + "\">\n            <div class=\"list-button\" onclick=\"modalFunction(" + i + ")\">\n                <b class=\"wrap-text-modal mclb\"><b>" + books[i].volumeInfo.title + "</b> -\n                - <b class=\"mcg\">" + books[i].volumeInfo.publishedDate.slice(0, 4) + "</b></b>\n                <b class=\"wrap-text-modal mcg\">by " + books[i].volumeInfo.authors + "\n                    <b class=\"wrap-text-modal mcw\">" + books[i].volumeInfo.pageCount + " pages</b>\n                </b>\n            </div>\n        </div>\n        ";
        bookCoverContainer[i].insertAdjacentHTML('afterbegin', text);
    }
}

function modalFunction(coverNumber) {

    // Get the modal
    var modal = document.getElementById('myModal' + coverNumber);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close" + coverNumber)[0];
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

$(document).ready(function () {
    $("#btnCard").click(function () {
        $(".layout-card").hide(1000);
        $(".layout-list").show(1000);
    });
});
