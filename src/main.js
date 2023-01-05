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
        div.className = "card";
        div.textContent = fruit;
        board === null || board === void 0 ? void 0 : board.appendChild(div);
        console.log(fruit);
        // main.appendChild(document.createElement("div")).textContent = fruit;
    });
}
placeOutFruits();
