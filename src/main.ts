const fruits: Array<string> = ["🍍", "🍒", "🍊", "🍋", "🍓", "🍑", "🍌", "🍎"];

// Shuffles an array
function shuffle<String>(arr: String[]) {
  let shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
}

// Merges an array two times, and shuffles it
function mergeArrays<String>() {
  const first: string[] = shuffle(fruits);
  const second: string[] = shuffle(fruits);

  const shuffledDoubleFruits: string[] = first.concat(second);
  const reShuffle = shuffle(shuffledDoubleFruits);
  return reShuffle;
}

function placeOutFruits() {
  const mixedFruits = mergeArrays();

  console.log(mixedFruits);

  const board = document.getElementById("board");

  mixedFruits.forEach((fruit) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = fruit;
    board?.appendChild(div);
    console.log(fruit);

    // main.appendChild(document.createElement("div")).textContent = fruit;
  });
}

placeOutFruits();
