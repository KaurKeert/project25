class Dustbin{

constructor(x,y,w,h){

    var options={
 isStatic:true
    }

    this.body=Bodies.rectangle(x,y,w,h,options)
   
    this.w=w
    this.h=h
    this.x=x
    this.y=y
    World.add(world,this.body)
}
display()
{ var dustbinPos=this.body.position; 
    push()
     translate(dustbinPos.x, dustbinPos.y);
      rectMode(CENTER) 
    strokeWeight(4);
     fill("white")
     rect(0,0,this.w, this.h);
       pop() } 
}


