addEventListener("DOMContentLoaded", main);
function main() {
    placeOutFruits();
    listenersAndClicks();
}
var fruits = ["🍍", "🍒", "🍊", "🍋", "🍓", "🍑", "🍌", "🍎"];
// Shuffles an array
function shuffle(arr) {
    var shuffled = arr
        .map(function (value) { return ({ value: value, sort: Math.random() }); })
        .sort(function (a, b) { return a.sort - b.sort; })
        .map(function (_a) {
        var value = _a.value;
        return value;
    });
    return shuffled;
}
// Merges an array two times, and shuffles it
function mergeArrays() {
    var first = shuffle(fruits);
    var second = shuffle(fruits);
    var shuffledDoubleFruits = first.concat(second);
    var reShuffle = shuffle(shuffledDoubleFruits);
    return reShuffle;
}
function placeOutFruits() {
    var mixedFruits = mergeArrays();
    console.log(mixedFruits);
    var board = document.getElementById("board");
    mixedFruits.forEach(function (fruit) {
        var div = document.createElement("div");
        div.classList.add("card", "cardBack");
        div.textContent = fruit;
        board === null || board === void 0 ? void 0 : board.appendChild(div);
        // div.addEventListener("click", clickedCard);
        console.log(fruit);
    });
}
function listenersAndClicks() {
    var memoryCards = Array.from(document.querySelectorAll(".card"));
    memoryCards.forEach(function (card) {
        card.addEventListener("click", clickedOnCard);
    });
}
function clickedOnCard(e) {
    var target = e.currentTarget;
    target.classList.toggle("cardBack");
    target.classList.toggle("cardShown");
    pairCheck();
}
function pairCheck() {
    var memoryCards = Array.from(document.querySelectorAll(".card"));
    var pairs = new Array();
    memoryCards.forEach(function (card) {
        if (card.classList.contains("cardShown")) {
            var fruitEmoji = card.textContent;
            if (fruitEmoji === null) {
                alert("null");
            }
            else {
                pairs.push(fruitEmoji);
            }
            // console.log(pairs);
        }
    });
}
