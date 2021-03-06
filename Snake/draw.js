const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let count = 0;
var snake;
(function setup(){
    snake = new Snake();
    apple = new Apple();
    apple.pickLocation();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        snake.update();
        apple.draw();
        snake.draw();
        if (snake.eat(apple)){
            apple.pickLocation();
            count++;
            document.getElementById('counter').innerHTML = count +" Pont";
        }
    }, 250)
}());
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));