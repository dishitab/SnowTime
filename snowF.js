class SnowF{
    constructor(x,y){

        var options = {
          
            isStatic:false
        }


this.image=loadImage("snow4.webp")
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
        image (this.image,this.body.position.x,this.body.position.y,60,60)
        ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);
        if(frameCount%200===0){
            snow1.push(new SnowF(random(width/8-30,width/2+60),10,15))
        }
        pop();

    }
}