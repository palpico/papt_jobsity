var myArray = ['school', 'js', 'the', 'is', 'this'];

function arrayReverse(input) {
    return input.reverse();
}

// Create a <p> element
var initialPara = document.createElement("P");
var reversedPara = document.createElement("P");
// Create a text node with array
var initialParaText = document.createTextNode("Initial Array: {" + myArray + "}");
var reversedParaText = document.createTextNode("Reversed Array: {" + arrayReverse(myArray) + "}");
// Append the text to <p>
initialPara.appendChild(initialParaText);
reversedPara.appendChild(reversedParaText);

//append elements after page loads
window.onload = function () {
    document.body.appendChild(initialPara);
    document.body.appendChild(reversedPara);
};

//prints to console
console.log(myArray);
console.log(arrayReverse(myArray));
