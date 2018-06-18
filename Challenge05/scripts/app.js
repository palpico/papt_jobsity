let bookCounter = 0;
let bookCoverContainer = Array.prototype.slice.call(document.getElementById("bookshelf").querySelectorAll(".book_cover"));

//Single book retrieval, slow bevause we used 15 api calls with different isbn to populate bookshelf
let singleBookUrl='https://www.googleapis.com/books/v1/volumes?q=isbn:';
// let bookID='9781451648546';
// let book=getBookInfo(singleBookUrl+String(bookID));
// drawCardContent(book2);

//Single books retieval only one call to api, 15 results (max books returned 40)
let bulkBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript+programming+best&maxResults=15&start-index=16';


function getBookInfo(url) {
    var Httpreq = new XMLHttpRequest(); // new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText).items;
}

let books = getBookInfo(bulkBookUrl);

drawCardContent(books);

function drawCardContent(info) {
    for (let i = 0; i <= books.length; i++) {
        // language=HTML
        let text = `
        <div class="demo-card-square mdl-card mdl-shadow--2dp img" onclick="modalFunction(${i})"
         style="background-image:url('${books[i].volumeInfo.imageLinks.thumbnail}');">
        </div>
        <div class="mdl-card__title">
        <b class="truncate">${books[i].volumeInfo.title}</b>
        </div>
        <div class="mdl-card__supporting-text">
        ${books[i].volumeInfo.authors}
        </div>
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                <i class="material-icons icons-star light-blue">star star_half star_border</i></a>
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
                                <img class="img-big" src="${books[i].volumeInfo.imageLinks.thumbnail}" alt="logo">
                            </div>
                            <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone 
                                modal-content-tittle">
                                <div class="modal-content">
                                    <ul class="list-modal-content">
                                        <li class="wrap-text-modal"><b>${books[i].volumeInfo.title}</b> -
                                        - ${books[i].volumeInfo.publishedDate.slice(0,4)}</li>
                                        <li class="wrap-text-modal">by ${books[i].volumeInfo.authors}</li>
                                        <li class="wrap-text-modal">${books[i].volumeInfo.pageCount} pages</li>
                                        <li class="wrap-text-modal"><b>SUMMARY</b></li>
                                        <li class="wrap-text-modal">Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Aliquam lectus tortor, posuere id mattis eget, mollis a nisl. 
                                        Vivamus gravida. </li>
                                        
                                        <li>
                                        <i class="material-icons icons-star light-blue">star star_half star_border</i>
                                        </li>
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
                                    </ul>
                                </div>
                                
                            </div>
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone">
                            </div>
                        </div>
                    </div>
                </div>
        `;
        bookCoverContainer[i].insertAdjacentHTML('afterbegin', text);
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
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}