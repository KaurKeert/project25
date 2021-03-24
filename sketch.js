
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,bottomside,leftside,rightside,ball1;
var bini,bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	ground1=new Ground(200,500,1200,20)
bottomside=new Dustbin(700,480,150,20)
leftside=new Dustbin(630,440,20,100)
rightside=new Dustbin(770,440,20,100)
ball1=new Ball(160,490,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground1.display();
bottomside.display();
leftside.display();
rightside.display();
ball1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:140,y:-150})
	}
}

