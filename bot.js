

// Snake game recreation 
// With AI BOT to solve it 
// Created By Anthony Burnett
// 


function Bot(){

    
    // randomly plays 
    // not very smart this one is ... :/
    this.play = function(){

        var rand = floor(random(4));

        if (rand == UP){
            snake.moveUp();
        } else if (rand == RIGHT){
            snake.moveLeft();
        } else if (rand == DOWN){
            snake.moveDown();
        } else if (rand == LEFT){
            snake.moveRight();
        } 

    }

}