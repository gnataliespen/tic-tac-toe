const board = document.querySelector(".board");
let turn = 0;
const button = document.querySelector(".reset");
const tiles = document.querySelectorAll(".tile");

board.addEventListener("click", function(evt) {
  console.log(evt.target.className);
  if (evt.target.className.split(" ")[0] === "tile") {
    if (evt.target.dataset.clicked !== "true") {
      if (turn % 2 === 0) {
        turn++;
        evt.target.style.background = "red";
      } else {
        turn++;
        evt.target.style.background = "blue";
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
  });
});
