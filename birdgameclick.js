"use strict"



// Grid 

buildGrid()

function buildGrid () {

let clickGrid = document.querySelector("div#mouseGrid")

for (let i = 0; i < 4; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("box");
    gridBox.classList.add("box-" + i);
    clickGrid.appendChild(gridBox);
    }
} 
