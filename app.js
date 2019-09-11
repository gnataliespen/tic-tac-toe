const board = document.querySelector(".board");
let turn = 0;
const button = document.querySelector(".reset");
const tiles = document.querySelectorAll(".tile");
const p1p2 = document.querySelector("h2");

board.addEventListener("click", function(evt) {
  console.log(evt.target.className);
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
});
button.addEventListener("click", function() {
  console.log(tiles);
  tiles.forEach(tile => {
    tile.style.background = "white";
    tile.dataset.clicked = "false";
    p1p2.innerText = "Its player ones turn";
    turn = 0;
  });
});
