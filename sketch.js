
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(200,100,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25);
 text("PRESS UP ARROWTO PUT THE PAPER IN THE DUSTBIN",100,100);
  paper.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(
paper.body,paper.body.position,{x:35,y:-25}
)


}




}