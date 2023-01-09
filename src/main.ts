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
  const board = document.getElementById("board");

  mixedFruits.forEach((fruit) => {
    const div = document.createElement("div");
    div.classList.add("card", "cardBack");
    div.textContent = fruit;
    board?.appendChild(div);
  });
}

function listenersAndClicks() {
  let memoryCards = Array.from(document.querySelectorAll(".card"));

  memoryCards.forEach((card) => {
    card.addEventListener("click", clickedOnCard);
  });
}

let counter: number = 0;

function clickedOnCard(e: Event) {
  const target = e.currentTarget as Element;
  target.classList.toggle("cardBack");
  target.classList.toggle("cardShown");

  counter++;

  pairs(counter, target);
}

let par: string[] = new Array();
let arrayOfFlippedCards: Element[] = new Array();

function pairs(flippedCards: number, target: Element) {
  arrayOfFlippedCards.push(target);
  const fruit: string | null = target.textContent;
  if (fruit === null) {
    alert("null");
  } else {
    par.push(fruit);
  }

  if (flippedCards === 2) {
    if (par[0] === par[1]) {
      arrayOfFlippedCards.forEach((card) => {
        card.classList.toggle("cardComplete");
      });
    } else {
      arrayOfFlippedCards.forEach((card) => {
        setTimeout(function () {
          card.classList.toggle("cardBack");
        }, 500);
      });
    }

    reset();
  }
  console.log(par);
  console.log(arrayOfFlippedCards);
}

function reset() {
  counter = 0;
  par.length = 0;
  arrayOfFlippedCards.length = 0;
}
