
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var hammer1;
var stone;
var rubber;





function setup(){
	var canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
	
	hammer1 = new Hammer(80,150,150,40);
	stone= new Stone(380,50,10,10);
	rubber= new Rubber(900,520,40);
	ground = new Ground(600,height,1200,100);
}
function draw(){
	background("white");
	Engine.update(engine);
	ground.display();
	hammer1.display();
	stone.display();
	rubber.display();
	
}


