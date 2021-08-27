class Paper {
constructor(x,y,radius){
    var options={
      'isStatic':false,
      'restitution':0.2,
      'friction':0.3,
      'density':0.1
    }
this.body=Bodies.rectangle(x,y,radius,radius,options);
this.radius=radius;
this.Image=loadImage("paper.png");
World.add(world,this.body);



}
display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.Image,0,0,this.radius,this.radius);
  pop();
}

};