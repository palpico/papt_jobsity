// var lastNote = localStorage.length
// function newPostIt() {
//     let key = "note"+lastNote
//     localStorage.setItem(key,prompt("Insert Note"))
//     lastNote = localStorage.length
// }
//
// function showPostIt() {
//     for (var i = 0; i < localStorage.length; i++){
//         let key ="note"+i
//         document.getElementById("demo").appendChild(
//             document.createElement("p").appendChild(
//                 document.createTextNode(localStorage.getItem(key))));
//         console.log(key);
//     }
// }

// function () {
//     try {
//
//     }
//     catch(err){
//         var errorMsg = 'Error:';
//         errorMsg += '\nNumber:' + err.number;
//         errorMsg += '\nDescription:' + err.description;
//         alert(strErr);
//     }
// }

var myDemo, lastNote;

// create a new note usgin pompt for user input
function newPostIt() {
    // if value not set first note will store a null value wit the correct key
    if (localStorage.length === 0) {
        lastNote = 0;
    }
    let key = "note" + lastNote;
    localStorage.setItem(key, prompt("Insert Note"));
    lastNote = localStorage.length;
}

// sore div demo in a variable so that we can add a paragraph with the text of each note
function showPostIt() {
    myDemo = document.getElementById("demo");
    clean()
    for (var i = 0; i < localStorage.length; i++) {
        let key = "note" + i;
        myDemo.appendChild(document.createElement("p").appendChild(
            document.createTextNode("Post it #" + (i + 1) + ": " + localStorage.getItem(key))));
        myDemo.appendChild(document.createElement("br"));
        console.log(localStorage.getItem(key)); //prints to console
    }
}

// function that clears the p childs created with showPostIt so it does not clutter
function clean() {
    while (myDemo.firstChild) {
        myDemo.removeChild(myDemo.firstChild);
    }
}
