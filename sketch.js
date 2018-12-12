
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

function setup(){

    createCanvas(500,500);
    frameRate(10);
    background(0);

    snake = new Snake();
    food = new Food();
    bot = new Bot();

}

function draw(){
    background(21);

    bot.play();

    var check = snake.update();
    if (check == -1){
        gameOver();
    }
    if(snake.position.equals(food.position)){
        snake.grow();
        food = new Food();
    }

    snake.show();
    food.show();

}

function gameOver(){
    console.log("game lost");
    console.log("resetting");
    snake = new Snake();
    food = new Food();
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