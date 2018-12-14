
// Snake game recreation 
// Created By Anthony Burnett
//

function Snake(){

    this.position = createVector(width / 2 * this.w, height / 2 * this.w);
    this.w = 20;

    this.velocity = createVector(0, -this.w);

    this.direction = UP;

    this.length = 0; 
    this.tail = [];

    this.reset = function(){

        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, -this.w);
        this.length = 0;
        this.tail = [];

    }

    this.grow = function(){

        this.length++;

    }

    // UPDATE 
    // ====================================================================================

    this.update = function(){

        // add current position to tail 
        if(this.tail.length == this.length){
            this.tail.push(this.position.copy());
            this.tail.shift();
        } else {
            this.tail.push(this.position.copy());
        }

        // move to next position 
        this.position.add(this.velocity);

        // hitting itself detection 
        for (var position of this.tail){

            if (position.x == this.position.x && position.y == this.position.y){

                return -1;

            }

        }

        // hits edge
        if(this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height){

            return -1;

        }

    }

    // MOVEMENT 
    // ====================================================================================

    this.moveUp = function(){
        if (this.direction != DOWN){
            this.velocity.x = 0;
            this.velocity.y = -this.w;
            this.direction = UP;
        }
    }

    this.moveRight = function(){
        if (this.direction != LEFT){
            this.velocity.x = this.w;
            this.velocity.y = 0;
            this.direction = RIGHT;
        }
    }

    this.moveDown = function(){
        if (this.direction != UP){
            this.velocity.x = 0;
            this.velocity.y = this.w;
            this.direction = DOWN;
        }
    }

    this.moveLeft = function(){
        if (this.direction != RIGHT){
            this.velocity.x = -this.w;
            this.velocity.y = 0;
            this.direction = LEFT;
        }
    }

    // VISUALIZATION 
    // ====================================================================================


    this.show = function(){

        fill(255);

        // draw tail
        for (var part of this.tail){
            rect(part.x, part.y, this.w, this.w);    
        }

        // draw head
        rect(this.position.x, this.position.y, this.w, this.w);       

    }


}

