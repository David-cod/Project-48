 class Boat{
    constructor(x,y,w,h){
        var options={
            'restitution':0.04,
            'density':1,
            'friction':1,


        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
       
    }
    display(){
        push()
   // Matter.body.setVelocity(this.body,{})
   pop()
    }
 }