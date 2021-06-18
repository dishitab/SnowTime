class Flake{
    constructor(x,y){

        var options = {
          
            isStatic:false
        }


this.image=loadImage("snow5.webp")
        this.r = 7;
        this.body=Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
       translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image (this.image,this.body.position.x,this.body.position.y,50,50)
        ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);
        if(frameCount%900===0){
            flake.push(new Flake(random(width/2-60,width/8+10),15,10))
        }
        pop();

    }
}