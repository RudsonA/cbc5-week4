"use strict"

let missed = "You missed the bird!";

let hit = "You hit the bird";

let zeroTo3 = "Pick a number from zero to three.";

let onlyNumbers = "Only numbers please!";

let grid = ("_|_\n_|_\n");
console.log(grid);

let birdsPath = Math.floor(Math.random() * 4) +1;

let newPath = grid;

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

document.getElementById("gameButton").onclick = function playGame() {

    // for (let i = 3; i > 0; i--) {
    let birdsPath = Math.floor(Math.random() * 4) + 1;

    // function gameReturns() {
    //     if (birdsPath == 0) {
    //         document.getElementById("game").innerHTML = "Bird was at 1!";
    //     } else if (birdsPath == 1) {
    //         document.getElementById("game").innerHTML = "Bird was at 2!";
    //     } else if (birdsPath == 2) {
    //         document.getElementById("game").innerHTML = "Bird was at 3!";
    //     } else if (birdsPath == 3) {
    //         document.getElementById("game").innerHTML = "Bird was at 4!";
    //     } else if (birdsPath > 3 || birdsPath < 0) {
    //         documenty
    //     } else {
    //         document.getElementById("game").innerHTML = "Unacceptable Return!";
    //     }

    // }

    // let attempts = i;
    // let remainding = "You have " + (attempts - 1) + " attempt(s) remainding!";
    // const textBox = document.getElementById("textBox");
    function clearText() {
        document.getElementById("textBox").value = ""
    }
    // let number = prompt("Pick a number from zero to three");
    const number = document.getElementById("textBox").value;

    function path(birdsPath) {
        if (birdsPath == number) {
            document.getElementById("game").innerHTML = hit;
            document.getElementById("gridImage").src = "img/shot.jpg";
            console.log(grid);
            console.log(birdsPath);
        } else if (birdsPath == 1) {
            console.log(grid.replaceAt(0, "X"));
            document.getElementById("gridImage").src = "img/plot1.gif";
            document.getElementById("game").innerHTML = "Missed! Bird was at 1!";
            console.log(birdsPath);
        } else if (birdsPath == 2) {
            console.log(grid.replaceAt(2, "X"));
            document.getElementById("gridImage").src = "img/plot2.gif";
            document.getElementById("game").innerHTML = "Missed! Bird was at 2!";
            console.log(birdsPath);
        } else if (birdsPath == 3) {
            console.log(grid.replaceAt(4, "X"));
            document.getElementById("gridImage").src = "img/plot3.gif";
            document.getElementById("game").innerHTML = "Missed! Bird was at 3!";
            console.log(birdsPath);
        } else if (birdsPath == 4) {
            console.log(grid.replaceAt(6, "X"));
            document.getElementById("gridImage").src = "img/plot4.gif";
            document.getElementById("game").innerHTML = "Missed! Bird was at 4!";
            console.log(birdsPath);
        } else {
            document.getElementById("game").innerHTML = "Unacceptable Return!";
        } console.log(grid)
    }

    path(birdsPath);

    if (number > 4 || number < 0) {
        alert("Pick a number one to four!")
    }

    clearText(); 
}
// if (number == birdsPath) {
//     document.getElementById("game").innerHTML = hit;
//     path(birdsPath);
//     document.getElementById("gridImage").src = "img/shot.jpg";   
// } else {
//     path(birdsPath);
//     console.log(birdsPath);
//     document.getElementById("game").innerHTML = "Bird was at " + birdsPath + "!" 
// break
// }

// console.log(number)
// }

document.getElementById("textBox").onkeyup = playGame()

display();

function display() {
    document.getElementById("game").style.backgroundRepeat = "no-repeat";
}


// math.floor(math.random()*4)
// (firstInput === secondInput)