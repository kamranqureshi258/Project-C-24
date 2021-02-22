class Stone {
    constructor(x, y,height,width) {
        var options = {
            density:2,
            friction:1.0,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 140;
        this.height = 130;
        
       
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };