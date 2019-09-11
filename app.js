const board = document.querySelector(".board");
let turn = 0;
const button = document.querySelector(".reset");
const tiles = document.querySelectorAll(".tile");
const p1p2 = document.querySelector("h2");
let boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

board.addEventListener("click", function(evt) {
  if (evt.target.className.split(" ")[0] === "tile") {
    if (evt.target.dataset.clicked !== "true") {
      if (turn % 2 === 0) {
        evt.target.style.background = "red";
        p1p2.innerText = "Its player twos turn";
        bModel(evt.target.className);
        turn++;
      } else {
        evt.target.style.background = "blue";
        p1p2.innerText = "Its player ones turn";
        bModel(evt.target.className);
        turn++;
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
    boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    turn = 0;
  });
};

button.addEventListener("click", reset);

const gameOver = () => {
  let go;
  tiles.forEach(tile => {
    if (tile.dataset.clicked !== "true") {
      go = false;
    }
  });
  if (go !== false) {
    p1p2.innerText = "Game Over";
  }
};

const bModel = target => {
  let location = target.split(" ");
  let xy = location[1].split("-");
  let x = 0;
  let y = 0;
  if (xy[0] === "top") {
    x = 0;
  } else if (xy[0] === "mid") {
    x = 1;
  } else {
    x = 2;
  }
  if (xy[1] === "left") {
    y = 0;
  } else if (xy[1] === "center") {
    y = 1;
  } else {
    y = 2;
  }
  if (turn % 2 === 0) {
    boardArr[x][y] = "red";
  } else {
    boardArr[x][y] = "blue";
  }
};
