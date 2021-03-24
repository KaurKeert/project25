class Ball{

   constructor(x,y,r){
var options={
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
    this.body=Bodies.circle(x,y,r,options)
    this.image=loadImage("Ball.png")
    this.image.scale=0.45
    this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)
    this
   } 

display(){
var ballPos=this.body.position; 
   
     imageMode(CENTER) 
    strokeWeight(4);
     fill("red")
    image(this.image,ballPos.x,ballPos.y,this.r);
        } 
}

