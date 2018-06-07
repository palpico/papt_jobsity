let time;
let counter=0;
let interval;

window.onload = function () {
    if (time == null) {
        functionInput()
    }
};

function functionInput() {
    let input = prompt("Insert number to be used as seconds for the timer","300");
    if (input >= 86401) {
        alert("Please limit the input to a maximun of a day in seconds (86400)");
        functionInput()
    } else if (input < 0) {
        alert("Please limit the input to positive numbers");
        functionInput()
        // first try used if (isNaN(parseInt(input))) but it returns true if first character is number
        // check input using regex /[a-z]/ i flag makes it case insensitive
    } else if (input.match(/[a-z]/i)) {
        alert("Please limit the input numbers only, letters are not valid");
        functionInput()
    }
    // /[~`!@#$%\^&*+=\-\[\]\\';,.|/{}|()\\":<>\?]/.test(input)
    else if (input.match(/[~`!@#$%^&*+=\-\[\]\\';,.|/{}()":<>?]/)) {
        alert("Please limit the input numbers only, symbols are not valid");
        functionInput();
    } else if (input === null) {

    } else {
        time = input;
        interval=  setInterval(display, 1000);
    }
}


function display() {
    if ( counter<=time) {
        let timeH = Math.floor((time - counter) / 3600);
        let timeM = Math.floor(((time - counter) % 3600) / 60);
        let timeS = Math.floor((time - counter) % 60);
        counter += 1;
        //print output to console

        console.log(twoDigits(timeH) + ":" + twoDigits(timeM) + ":" + twoDigits(timeS));
        // document.write does not get along with setinterval
        // document.write(timeH + ":" + timeM + ":" + timeS + "<BR>");
        // changes p demo value
        // document.getElementById("demo").innerText= twoDigits(timeH) + ":" + twoDigits(timeM) + ":" + twoDigits(timeS);
        // creates a new p in demo and shows the time
        document.getElementById("demo").appendChild(
            document.createElement("p").appendChild(
                document.createTextNode(twoDigits(timeH) + ":" + twoDigits(timeM) + ":" + twoDigits(timeS))));
        document.getElementById("demo").appendChild(
            document.createElement("br")); //cant add +"<br>" to text node
    }else {
        clearInterval(interval)
    }
}

//check if values is less tan 10 so id adds a 0
function twoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}
