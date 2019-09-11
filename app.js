const board = document.querySelector(".board");
let turn = 0;
const button = document.querySelector(".reset");
const tiles = document.querySelectorAll(".tile");
const p1p2 = document.querySelector("h2");
let boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const reset = () => {
  tiles.forEach(tile => {
    tile.style.background = "white";
    tile.dataset.clicked = "false";
    p1p2.innerText = "Its player ones turn";
    boardArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    turn = 0;
  });
};

const bModel = target => {
  let location = target.split(" ");
  let yx = location[1].split("-");
  let x = 0;
  let y = 0;
  if (yx[0] === "top") {
    y = 0;
  } else if (yx[0] === "mid") {
    y = 1;
  } else {
    y = 2;
  }
  if (yx[1] === "left") {
    x = 0;
  } else if (yx[1] === "center") {
    x = 1;
  } else {
    x = 2;
  }
  if (turn % 2 === 0) {
    boardArr[y][x] = "red";
  } else {
    boardArr[y][x] = "blue";
  }
};

const winner = () => {
  if (boardArr[0][0] === boardArr[0][1] && boardArr[0][1] === boardArr[0][2]) {
    return boardArr[0][0];
  } else if (
    boardArr[1][0] === boardArr[1][1] &&
    boardArr[1][1] === boardArr[1][2]
  ) {
    return boardArr[1][0];
  } else if (
    boardArr[2][0] === boardArr[2][1] &&
    boardArr[2][1] === boardArr[2][2]
  ) {
    return boardArr[2][0];
  } else if (
    boardArr[0][0] === boardArr[1][0] &&
    boardArr[1][0] === boardArr[2][0]
  ) {
    return boardArr[0][0];
  } else if (
    boardArr[0][1] === boardArr[1][1] &&
    boardArr[1][1] === boardArr[2][1]
  ) {
    return boardArr[0][1];
  } else if (
    boardArr[0][2] === boardArr[1][2] &&
    boardArr[1][2] === boardArr[2][2]
  ) {
    return boardArr[0][2];
  } else if (
    boardArr[0][0] === boardArr[1][1] &&
    boardArr[1][1] === boardArr[2][2]
  ) {
    return boardArr[0][0];
  } else if (
    boardArr[0][2] === boardArr[1][1] &&
    boardArr[1][1] === boardArr[2][0]
  ) {
    return boardArr[0][2];
  } else {
    return false;
  }
};
const gameOver = () => {
  let go = true;
  tiles.forEach(tile => {
    if (tile.dataset.clicked !== "true") {
      go = false;
    }
  });
  return go;
};

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
  if (winner() === "red") {
    p1p2.innerText = `Game Over, player one wins`;
    unclickable();
  } else if (winner() === "blue") {
    p1p2.innerText = `Game Over, player two wins`;
    unclickable();
  } else if (gameOver()) {
    p1p2.innerText = `Game Over, its a tie!`;
  }
});
const unclickable = () => {
  tiles.forEach(tile => {
    tile.dataset.clicked = "true";
  });
};

button.addEventListener("click", reset);
