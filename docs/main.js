"use strict";
addEventListener("DOMContentLoaded", main);
function main() {
    placeOutFruits();
    listenersAndClicks();
}
const fruits = ["🍍", "🍒", "🍊", "🍋", "🍓", "🍑", "🍌", "🍎"];
let par = new Array();
let arrayOfFlippedCards = new Array();
let counter = 0;
// Adds eventlisteners on all playingcards
function listenersAndClicks() {
    const memoryCards = Array.from(document.querySelectorAll(".card"));
    memoryCards.forEach((card) => {
        card.addEventListener("click", clickedOnCard);
    });
}
// Shuffles an array
function shuffle(arr) {
    let shuffled = arr
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffled;
}
// Merges an array two times, and shuffles it
function mergeArrays() {
    const first = shuffle(fruits);
    const second = shuffle(fruits);
    const shuffledDoubleFruits = first.concat(second);
    const reShuffle = shuffle(shuffledDoubleFruits);
    return reShuffle;
}
// Places out the fruit cards on the board
function placeOutFruits() {
    const mixedFruits = mergeArrays();
    const board = document.getElementById("board");
    mixedFruits.forEach((fruit) => {
        const div = document.createElement("div");
        div.classList.add("card", "cardBack");
        div.textContent = fruit;
        board?.appendChild(div);
    });
}
// What happens when you click on a playing card
function clickedOnCard(e) {
    const target = e.currentTarget;
    if (target.classList.contains("cardComplete")) {
    }
    else {
        target.classList.toggle("cardBack");
        target.classList.toggle("cardShown");
        counter++;
        pairs(counter, target);
    }
}
// Takes the current amount of flipped cards, and which card was flipped, and gives an outcome based on that
function pairs(flippedCards, target) {
    arrayOfFlippedCards.push(target);
    const fruit = target.textContent;
    if (fruit === null) {
        alert("null");
    }
    else {
        par.push(fruit);
    }
    if (flippedCards === 2) {
        if (par[0] === par[1]) {
            arrayOfFlippedCards.forEach((card) => {
                card.classList.add("cardComplete");
            });
        }
        else {
            arrayOfFlippedCards.forEach((card) => {
                setTimeout(function () {
                    card.classList.toggle("cardBack");
                }, 500);
            });
        }
        reset();
    }
}
// Resets the counter and arrays used for seeing if the cards are matched
function reset() {
    counter = 0;
    par.length = 0;
    arrayOfFlippedCards.length = 0;
}
//# sourceMappingURL=main.js.map