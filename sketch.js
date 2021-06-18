const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boy
var flakes=[]
var snow1=[]
function preload(){

  snow=loadImage("snow3.jpg")
  boy=loadImage("boy.png")

}



function setup() {
  createCanvas(windowWidth,windowHeight);
 engine = Engine.create();
 world = engine.world;
  //createCanvas(800,400);
  boy1=createSprite(700, 380, 50, 50);
  boy1.addImage(boy)
  boy1.scale=0.08
  for (var a=20; a<=width-30;a=a+50){
    snow1.push(new SnowF(a,-350));
  }
  for (var d=30; d<=width-20;d=d+100){
    flakes.push(new Flake(d,5));
  }
 
}

function draw() {
  background(snow);  
  drawSprites();
  Engine.update(engine);
  textSize (25)
  fill ("white")
  text ("Press left and right arrow to move the boy!!",20,20)
  for (var d=0; d< flakes.length;d++){
    flakes[d].display()
  }
 
  for (var a=2; a< snow1.length;a++){
    snow1[a].display()
  }
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    boy1.x=boy1.x+6
  }
  if(keyCode===LEFT_ARROW){
    boy1.x=boy1.x-6
  }
  
}