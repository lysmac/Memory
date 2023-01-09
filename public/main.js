"use strict";
addEventListener("DOMContentLoaded", main);
function main() {
    placeOutFruits();
    listenersAndClicks();
}
const fruits = ["🍍", "🍒", "🍊", "🍋", "🍓", "🍑", "🍌", "🍎"];
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
function placeOutFruits() {
    const mixedFruits = mergeArrays();
    console.log(mixedFruits);
    const board = document.getElementById("board");
    mixedFruits.forEach((fruit) => {
        const div = document.createElement("div");
        div.classList.add("card", "cardBack");
        div.textContent = fruit;
        board?.appendChild(div);
        // div.addEventListener("click", clickedCard);
        console.log(fruit);
    });
}
function listenersAndClicks() {
    let memoryCards = Array.from(document.querySelectorAll(".card"));
    memoryCards.forEach((card) => {
        card.addEventListener("click", clickedOnCard);
    });
}
function clickedOnCard(e) {
    const target = e.currentTarget;
    target.classList.toggle("cardBack");
    target.classList.toggle("cardShown");
    pairCheck();
}
function pairCheck() {
    let memoryCards = Array.from(document.querySelectorAll(".card"));
    let pairs = new Array();
    let counter = 0;
    let fruitOne;
    memoryCards.forEach((card) => {
        if (card.classList.contains("cardShown")) {
            const fruitEmoji = card.textContent;
            if (fruitEmoji === null) {
                alert("null");
            }
            else {
                pairs.push(fruitEmoji);
                counter++;
                if (counter === 2) {
                    // alert("första", pairs[0]);
                    alert(pairs[1]);
                }
                // alert(fruitOne);
            }
            // console.log(pairs);
        }
    });
}
//# sourceMappingURL=main.js.map