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

    let birdsPath = Math.floor(Math.random() * 4) + 1;

    function clearText() {
        document.getElementById("textBox").value = ""
    }
    
    const number = document.getElementById("textBox").value;

    function path(birdsPath) {

        if (birdsPath == number) {
            document.getElementById("game").innerHTML = hit;
            document.getElementById("gridImage").src = "img/shot.jpg";
            console.log(grid);
            console.log(birdsPath);
        } else {
            console.log(grid.replaceAt(`${birdsPath}`, "X"));
            document.getElementById("gridImage").src = `img/plot${birdsPath}.gif`; 
            document.getElementById("game").innerHTML = `Missed! Bird was at ${number}!`; 
            console.log(birdsPath);
        }
         console.log(grid)
    }

    path(birdsPath);

    if (number > 4 || number < 0) {
        alert("Pick a number one to four!")
        console.log("Pick a number one to four!")
    }

    if (isNaN(number)) {
        alert("Not a Number!") 
        console.log("Not a Number!")
    }

    clearText(); 
}


document.getElementById("textBox").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("gameButton").click()
    }
})

display();

function display() {
    document.getElementById("game").style.backgroundRepeat = "no-repeat";
}
