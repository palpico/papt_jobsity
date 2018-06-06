var myArray = [3, 5, 7, 2, 4, 8, 9, 23]

function compareNumbers(a, b) {
    return a - b;
}

// Create a <p> element
var initialPara = document.createElement("P");
var sortedPara = document.createElement("P");
var sortedNumericPara = document.createElement("P");
// Create a text node with array
var initialParaText = document.createTextNode("Initial Array: {" + myArray + "}");
var sortedParaText = document.createTextNode("Sorted Array: {" + myArray.sort() + "}");
var sortedNumericParaText = document.createTextNode(
    "Sorted Array with compareNumbers: {" + myArray.sort(compareNumbers) + "}");
// Append the text to <p>
initialPara.appendChild(initialParaText);
sortedPara.appendChild(sortedParaText);
sortedNumericPara.appendChild(sortedNumericParaText);

//append elements after page loads
window.onload = function () {
    document.body.appendChild(initialPara);
    document.body.appendChild(sortedPara);
    document.body.appendChild(sortedNumericPara);
};

//prints to console
console.log(initialParaText);
console.log(sortedParaText);
console.log(sortedNumericParaText);