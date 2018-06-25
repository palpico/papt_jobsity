'use strict'

//Single book retrieval, slow bevause we used 15 api calls with different isbn to populate bookshelf
//let singleBookUrl='https://www.googleapis.com/books/v1/volumes?q=isbn:';
// let bookID='9781451648546';
// let book=getBookInfo(singleBookUrl+String(bookID));
// drawCardContent(book2);

//Single books retieval only one call to api, 15 results (max books returned 40)
let bulkBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript+programming+best&maxResults=10&start-index=16';


function getBookInfo(url) {
    let Httpreq = new XMLHttpRequest(); // new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText).items;
}

let books = getBookInfo(bulkBookUrl);

window.onload = drawCardContent(books);

function drawCardContent(info) {
    for (let i = 0; i <= books.length; i++) {
        // language=HTML
        let text = `
        <div class="mdl-cell--20-col mdl-cell--4-col-tablet mdl-cell--4-col-phone book_cover" id="book_${i}">
            <div class="layout-card" id="layout-card${i}" onclick="modalFunction(${i})">
                <img class="img" src="${info[i].volumeInfo.imageLinks.thumbnail}">
                </img>
                <div class="mdl-card__title">
                <b class="truncate light-blue">${info[i].volumeInfo.title}</b>
                </div>
                <div class="mdl-card__supporting-text">
                ${info[i].volumeInfo.authors}
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
                            <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--hide-phone">
                                <img class="img-big" src="${info[i].volumeInfo.imageLinks.thumbnail}" alt="logo">
                            </div>
                            <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone 
                                modal-content-tittle">
                                <div class="modal-content">
                                    <ul class="list-modal-content">
                                        <li class="wrap-text-modal mclb"><b>${info[i].volumeInfo.title}</b> -
                                        - <b class="mcg">${info[i].volumeInfo.publishedDate.slice(0, 4)}</b></li>
                                        <li class="wrap-text-modal mcg">
                                            <span style="color: #FFFFFF">by </span>${info[i].volumeInfo.authors}</li>
                                        <li class="wrap-text-modal mcw">${info[i].volumeInfo.pageCount} pages</li>
                                        <br>
                                        <li class="wrap-text-modal mcg"><b>SUMMARY</b></li>
                                        <li class="wrap-text-modal mcw">Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Aliquam lectus tortor, posuere id mattis eget, mollis a nisl. 
                                        Vivamus gravida. </li>
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
                    <b class="wrap-text-modal mclb"><b>${books[i].volumeInfo.title}</b> -
                    - <b class="mcg">${books[i].volumeInfo.publishedDate.slice(0, 4)}</b></b>
                    <b class="wrap-text-modal mcg">by ${books[i].volumeInfo.authors}
                        <b class="wrap-text-modal mcw">${books[i].volumeInfo.pageCount} pages</b>
                    </b>
                </div>
            </div>
        </div>
        `;
        document.getElementById("covers").insertAdjacentHTML('afterbegin', text);
    }
}


function modalFunction(coverNumber) {

    // Get the modal
    let modal = document.getElementById('myModal' + coverNumber);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close" + coverNumber)[0];
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
    }
}

$(document).ready(function () {
    $("#btnCard").click(function () {
        $(".layout-card").hide(1000);
        $(".layout-list").show(1000);
    })
});
