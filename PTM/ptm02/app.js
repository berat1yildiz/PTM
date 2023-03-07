var game;
var snake;
var food;
var direction;
var moving;
var playing;
var speed = 4;
var play;


function defaultVariables(){
    moving = false;
    playing = false;
    food = 0;
    snake = [[0,0]];
    direction = "Right";
}

function initialGameState(gameElement){
    game = document.getElementById(gameElement);
    defaultVariables();

    for(var i = 0; i<100; i++){
        var pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        game.appendChild(pixel);
    }

    game.children[0].classList.add("snake");
    generateFood();

}

function generateFood(){

    while (game.children[food].classList.contains("snake")) {
        food = Math.floor(Math.random() * 100);
    }
    game.children[food].classList.add("food");

}

function startGame(){
    if(!playing){
        moving = true;
        play = setInterval(position, 1000 / speed);
        document.getElementById("menu").style.display = "none";
        document.getElementById("game").style.display = "";
        playing = true;
    }
}

function endGame(){
    clearInterval(play);
    document.getElementById("menu-text").innerText =
        "Game Over\nYour Score: " +
        (snake.length - 1)*10 +
        "\nPress ENTER to restart";
    document.getElementById("menu").style.display = "";
    document.getElementById("game").style.display = "none";
    game.innerText = "";
    initialGameState(game.id);
}

function position(){
    var horizontalPosition, verticalPosition;
    var head = snake[snake.length - 1];

    switch (direction) {
        case "Up":
            horizontalPosition = head[0] - 1;
            verticalPosition = head[1];
            break;
        case "Down":
            horizontalPosition = head[0] + 1;
            verticalPosition = head[1];
            break;
        case "Left":
            horizontalPosition = head[0];
            verticalPosition = head[1] - 1;
            break;
        case "Right":
            horizontalPosition = head[0];
            verticalPosition = head[1] + 1;
            break;
        default:
            break;
    }

    if (horizontalPosition < 0 || horizontalPosition > 9 || verticalPosition < 0 || verticalPosition > 9) {
        endGame();
        console.log("Border death")
    } else {
        snake.push([horizontalPosition, verticalPosition]);
        updateScreen();
        moving = true;
    }

}
function updateScreen() {
    var tailArray = snake.shift();

    var tail = parseInt(tailArray[0] + "" + tailArray[1]);

    var headArray = snake[snake.length - 1];

    var head = parseInt(headArray[0] + "" + headArray[1]);

    if (game.children[head].classList.contains("snake")) {

        endGame();

    } else {

        game.children[head].classList.add("snake");

        game.children[tail].classList.remove("snake");

        if (head == food) {
            game.children[food].classList.remove("food");
            snake.unshift(tailArray);
            
            snake.length == 100 && endGame();
            generateFood();
        }
    }
}
document.onkeydown = keyPress;

function keyPress(e) {
    e.preventDefault();
    e = e || window.event;

    e.keyCode == 13 && startGame();
    let up = 38;
    let down = 40;
    let left = 37;
    let right = 39;

    if (moving) {
        moving = false;
        switch (e.keyCode) {
            case left:
                direction != "Right" && (direction = "Left");
                break;
            case up:
                direction != "Down" && (direction = "Up");
                break;
            case right:
                direction != "Left" && (direction = "Right");
                break;
            case down:
                direction != "Up" && (direction = "Down");
                break;
            default:
                moving = true;
                break;
        }
    }
}

initialGameState("game");