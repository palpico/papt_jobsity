//nodelist off all polygons from html
var pianoKeys = document.querySelectorAll("polygon");

// var pianoSounds=[];

//loop to add listener to all polygons
for (let i = 0; i < pianoKeys.length; i++) {

    pianoKeys[i].addEventListener("mousedown", function () {
            play(pianoKeys[i].dataset.freq);
        }
    )
    ////Added listener for mousedown and mouse up to control sound duration but audioContext nodes are not reusable
    ////start() cant be called again, they have to be created each time
    // pianoKeys[i].addEventListener("mousedown", function () {
    //         play(pianoKeys[i].dataset.key, pianoKeys[i].dataset.freq);
    //     }
    // )
    // pianoKeys[i].addEventListener("mouseup", function () {
    //         stop(pianoKeys[i].dataset.key);
    //     }
    // )
    // createPianoSounds(pianoKeys[i].dataset.key, pianoKeys[i].dataset.freq);
// }
//
// function play(a,b) {
//     console.log(a);
//     console.log(pianoSounds.find(item=>item.name===a).o);
//     let sound=pianoSounds.find(item=>item.name===a).o;
//     sound.start();
// }
//
// function createPianoSounds(a,b) {
//     var context = new AudioContext();
//     var o = context.createOscillator();
//     o.frequency.value = Number(b);
//     o.type = "sine";
//     o.connect(context.destination);
//     pianoSounds.push({name:a,o});
// }
//
// function stop(a) {
//     let o = pianoSounds.find(item=>item.name==a).o;
//     o.pause();
}

function play(b) {
    var context = new AudioContext();
    var o = context.createOscillator();
    o.frequency.value = Number(b);
    o.connect(context.destination);
    o.type = "sine";
    var currentTime = context.currentTime;
    o.start(currentTime);
    o.stop(currentTime + 1);
}



// //Create audio context, also checks if it is supported. function wont work with oscilator constructor
// var getAudioContext = function() {
//     var audioContext = null;
//     if ( !window.AudioContext && !window.webkitAudioContext ) {
//         console.warn('Web Audio API is not supported in this browser');
//     } else {
//         audioContext = new ( window.AudioContext || window.webkitAudioContext )();
//     }
//     return function() {
//         return audioContext;
//     };
// };