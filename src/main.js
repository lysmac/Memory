var fruits = ["🍍", "🍒", "🍊", "🍋", "🍓", "🍑", "🍌", "🍎"];
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
function mergeArrays() {
    var first = shuffle(fruits);
    var second = shuffle(fruits);
    var shuffledDoubleFruits = first.concat(second);
    console.log(shuffledDoubleFruits);
}
mergeArrays();
