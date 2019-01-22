
// Snake game recreation 
// Created By Anthony Burnett
//

const UP = 0;
const RIGHT = 1; 
const DOWN = 2;
const LEFT = 3;

var snake; 
var food; 
var bot; 
var score;

function setup(){

    createCanvas(500,500);
    frameRate(10);
    background(0);

    snake = new Snake();
    food = new Food();
    bot = new Bot();
    score = 0;

}

function draw(){
    background(21);

    document.getElementById("score").innerHTML = score;

    bot.play();

    var check = snake.update();
    if (check == -1){
        gameOver();
    }

    // snake eats food
    if(snake.position.equals(food.position)){
        snake.grow();
        food = new Food();
        score += 10;
    }

    snake.show();
    food.show();

}

function gameOver(){
    console.log("game lost");
    console.log("resetting");
    snake = new Snake();
    food = new Food();
    score=0;
}

function keyPressed(){
    if (keyCode == UP_ARROW){
        snake.moveUp();
    } else if (keyCode == LEFT_ARROW){
        snake.moveLeft();
    } else if (keyCode == DOWN_ARROW){
        snake.moveDown();
    } else if (keyCode == RIGHT_ARROW){
        snake.moveRight();
    } 
}