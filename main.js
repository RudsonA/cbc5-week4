"use strict"

let missed = "You missed the bird";

let hit = "You hit the bird";

let oneToTen = "Pick a number one to ten"

let onlyNumbers = "Only numbers please!"

// let picknumber = prompt ("Pick a number between 0 and 10")

// let even = (picknumber % 2 !==0)

// let odd = (picknumber % 2 == 0)


// for (; picknumber % 2 !== 0; ) {
//     alert (hit);
//     document.getElementById("game").style.backgroundImage="url('img/home.gif')";
//     if (!even) break;
// } 

// for (; picknumber % 2 == 0; ) {
//     alert (missed); 
//     document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
//     if (!odd) break
// }

for (let i = 1; i < 6; i++) {
    let picknumber = prompt ("Pick a number between 0 and 10");

    // let even = (picknumber % 2 !==0)

    // let odd = (picknumber % 2 == 0)
    if (picknumber == "0") {
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
        // alert(hit);
    } else if (picknumber=="1") {
        alert(missed);
        document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
    } else if (picknumber=="2") {
        alert(hit);
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
    } else if (picknumber=="3") {
        alert(missed);
        document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
    } else if (picknumber=="4") {
        alert(hit);
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
    } else if (picknumber == "5") {
        alert(missed); 
        document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
    } else if (picknumber == "6") {
        alert(hit);
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
    } else if (picknumber == "7") {
        alert (missed);
        document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
    } else if (picknumber=="8") {
        alert(hit);
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
    } else if (picknumber=="9") {
        alert(missed);
        document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
    } else if (picknumber=="10") {
        alert(hit);
        document.getElementById("game").style.backgroundImage="url('img/home.gif')";
    } else if (picknumber > 10) {
        alert(oneToTen);
        document.getElementById("game").style.backgroundImage="url('img/oneToTen.png')";
    } else { 
        alert (onlyNumbers) 
        document.getElementById("game").style.backgroundImage="url('img/dead.png')";
        break;
    }
}


function display() {
    document.getElementById("game").style.backgroundRepeat="no-repeat";
}

display()

