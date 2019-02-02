"use strict"

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


let missed = "You missed the bird!";

let hit = "You hit the bird";

let zeroTo3 = "Pick a number from zero to three."

let onlyNumbers = "Only numbers please!"

let grid = ("_|_\n_|_\n")
console.log(grid)

let birdsPath = Math.floor(Math.random() * 3)

let newPath = grid;



// THE CODE WORKS TOGETHER!!!

// function path(birdsPath) {
//     if (birdsPath == 0) {
//         console.log("X|_\n _|_\n")
//     } else if (birdsPath == 1) {
//         console.log("_|X\n _|_\n")
//     } else if (birdsPath == 2) {
//         console.log("_|_\n X|_\n")
//     } else if (birdsPath == 3) {
//         console.log("_|_\n _|X\n")
//     } else {
//         console.log("Unnacceptable input")
//     }
// }

function path(birdsPath) {
    if (birdsPath == 0) {
        console.log(grid.replaceAt(0, "X"));
    } else if (birdsPath==1) {
        console.log(grid.replaceAt(2, "X"));
    } else if (birdsPath==2) {
        console.log(grid.replaceAt(4, "X"));
    } else if (birdsPath == 3) {
        console.log(grid.replaceAt(6, "X"));
    } else {
        console.log("Unnacceptable input")
    }
}

function playGame() {

    for (let i = 3; i > 0; i--) {
        let number = prompt("Pick a number from zero to three")
        let birdsPath = Math.floor(Math.random() * 4)
        let birdwas = " Bird was at " + birdsPath
        let attempts = i
        let remainding = "You have " + (attempts - 1) + " attempt(s) remainding!"

        if (number == birdsPath) {
            alert(hit);
            document.getElementById("game").style.backgroundImage = "url('img/up.gif'";
            console.log(path(birdsPath))
            console.log(birdsPath)
            break
        } else {
            alert(missed + birdwas + "!");
            alert(remainding);
            console.log(path(birdsPath))
            console.log(birdsPath)
            document.getElementById("game").style.backgroundImage = "url('img/down.gif'";
        }
    }
}

    

    // function path(birdsPath) {
    //     if (birdsPath == 0) {
    //         console.log(newPath.charsAt(0) = "X")
    //     } else if (birdsPath == 1) {
    //         console.log(newPath.charsAt(1) = "X")
    //     } else if (birdsPath == 2) {
    //         console.log(newPath.charsAt(2) = "X")
    //     } else if (birdsPath == 3) {
    //         console.log(newPath.charsAt(3) = "X")
    //     } else {
    //         console.log("Unnacceptable input")
    //     }
    // }
    // // console.log(newPath);

    // function playGame() {

    //     for (let i = 3; i > 0; i--) {
    //         let number = prompt("Pick a number from zero to nine")
    //         let birdsPath = Math.floor(Math.random() * 3)
    //         let birdwas = " Bird was at " + birdsPath
    //         let attempts = i
    //         let remainding = "You have " + (attempts - 1) + " attempt(s) remainding!"

    //         if (number == birdsPath) {
    //             alert(hit);
    //             document.getElementById("game").style.backgroundImage = "url('img/up.gif'";
    //             console.log(path(birdsPath))
    //             console.log(birdsPath)
    //             break
    //         } else {
    //             alert(missed + birdwas + "!");
    //             alert(remainding);
    //             console.log(birdsPath)
    //             // console.log(grid.charAt(birdsPath))
    //             console.log(path(birdsPath))
    //             document.getElementById("game").style.backgroundImage = "url('img/down.gif'";
    //         }
    //     }
    // }

playGame()

display()

function display() {
    document.getElementById("game").style.backgroundRepeat = "no-repeat";
}


// math.floor(math.random()*4)
// (firstInput === secondInput)