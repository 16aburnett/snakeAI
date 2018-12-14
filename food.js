

// Snake game recreation 
// Created By Anthony Burnett
//

function Food(){

    this.position;
    this.w = 20;

    // pick random location 
    var x = floor(random(width / this.w));
    var y = floor(random(height / this.w));

    this.position = createVector(x * this.w, y * this.w);


    this.show = function(){

        fill(230, 80, 80);

        rect(this.position.x, this.position.y, this.w, this.w);

    }

}