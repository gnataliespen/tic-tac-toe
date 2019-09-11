const board = document.querySelector(".board");
let turn = 0;
const button = document.querySelector(".reset");
const tiles = document.querySelectorAll(".tile");
const p1p2 = document.querySelector("h2");
const boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

board.addEventListener("click", function(evt) {
  if (evt.target.className.split(" ")[0] === "tile") {
    if (evt.target.dataset.clicked !== "true") {
      if (turn % 2 === 0) {
        turn++;
        evt.target.style.background = "red";
        p1p2.innerText = "Its player twos turn";
      } else {
        turn++;
        evt.target.style.background = "blue";
        p1p2.innerText = "Its player ones turn";
      }
      evt.target.dataset.clicked = "true";
    }
  }
  gameOver();
});
const reset = () => {
  tiles.forEach(tile => {
    tile.style.background = "white";
    tile.dataset.clicked = "false";
    p1p2.innerText = "Its player ones turn";
    turn = 0;
  });
};

button.addEventListener("click", reset);

const gameOver = () => {
  let go;
  tiles.forEach(tile => {
    console.log(tile.dataset);
    if (tile.dataset.clicked !== "true") {
      go = false;
    }
  });
  console.log(go);
  if (go !== false) {
    p1p2.innerText = "Game Over";
  }
};
