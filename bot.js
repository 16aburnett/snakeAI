

// Snake game recreation 
// With AI BOT to solve it 
// Created By Anthony Burnett
// 


function Bot(){

    // stack that holds current path to follow to the food
    var currentPath = [];





    // State 1 : Get the food 
    this.seekOutFood = function(){

        // move toward food 
        // if path to food is clear 

        var deltaX = food.position.x - snake.position.x;
        var deltaY = food.position.y - snake.position.y;

        if(deltaX > 0) { // snake is left of food

            if(snake.direction != LEFT){
                console.log("moving right");
                snake.moveRight();
                return; 
            }

        } else if (deltaX < 0) { // snake is right of food 

           if(snake.direction != RIGHT){
            console.log("moving left");
                snake.moveLeft();
                return; 
            }

        } 

        if(deltaY > 0) { // snake is above food

            if(snake.direction != UP){
                console.log("moving down");
                snake.moveDown();
            } 

        } else if (deltaY < 0) { // snake is below food 

            if(snake.direction != DOWN){
                console.log("moving up");
                snake.moveUp();
            } 

        } 

    }
    


    // randomly plays 
    // not very smart this one is ... :/
    this.play = function(){

        // var rand = floor(random(4));

        // if (rand == UP){
        //     snake.moveUp();
        // } else if (rand == RIGHT){
        //     snake.moveLeft();
        // } else if (rand == DOWN){
        //     snake.moveDown();
        // } else if (rand == LEFT){
        //     snake.moveRight();
        // } 

        this.seekOutFood();

    }

}