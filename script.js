let field = document.getElementById("field");
let snake = document.getElementById("snake");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let position = 0;
function move() {
  let move = snake;
  snake.style.left = "+1px";
}
let start1 = (start.onclick = function () {
  setInterval(() => {
    position += 0.3;
    snake.style.left = position + "1px";
  }, 10);
});

