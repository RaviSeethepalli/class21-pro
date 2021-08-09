const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var g1;
var g2;
var g3;



function setup() {
  createCanvas(900,300);
  engine = Engine.create();
  world = engine.world;

 
  var opt={
    inStaric:false,
    restitution:0.3,
     friction:0,
     density:2.5
  } 
   ball=Bodies.circle(200,20,20,opt);
  World.add(world,ball)
  
  g1 =new Ground(450,290,900,10);
  g2 = new Ground(600,250,8,60);
  g3 = new Ground(750,250,8,60);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);


}

function draw() 
{
  background(51);
  g1.display();
  g2.display();
  g3.display();
 
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
  
}

function keyPressed(){

  if ( keyCode === UP_ARROW ){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
    
    }
  }


