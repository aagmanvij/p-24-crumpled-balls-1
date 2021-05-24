
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var engine,world;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,height,1200,20)

	box1 = new Box (1000,384,250,15);
  
	box3 = new Box (1125,316,15,150);
  
  ball1 = new Ball (200,200,20);
}

function draw() {
  
  background(0);
  Engine.update(engine);
  
   ground.display();
   box1.display();
;
   box3.display();

   ball1.display();

 keypress();

}

function keypress(){

  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:4,y:-1});
}
}

