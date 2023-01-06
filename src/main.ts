addEventListener("DOMContentLoaded", main);

function main() {
  placeOutFruits();
  listenersAndClicks();
}

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
function clickedOnCard(e: Event) {
  const target = e.currentTarget as Element;
  target.classList.toggle("cardBack");
  target.classList.toggle("cardShown");
  pairCheck();
}

function pairCheck() {
  let memoryCards = Array.from(document.querySelectorAll(".card"));
  let pairs: string[] = new Array();

  memoryCards.forEach((card) => {
    if (card.classList.contains("cardShown")) {
      const fruitEmoji: string | null = card.textContent;
      if (fruitEmoji === null) {
        alert("null");
      } else {
        pairs.push(fruitEmoji);
      }
      // console.log(pairs);
    }
  });
}
