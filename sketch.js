
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	bg=loadImage("camp.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
speed=random(55,90);
weight=random(400,1500);

createCanvas(800, 700);
	
  createSprite(400, 200, 50, 50);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	var pos = packageBody.position;
	var angle = packageBody.angle;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	redBox1 = new redBox(403, 648, 200, 20);
	World.add(world, redBox1);

	redBox2 = new redBox(296, 610, 20, 100);
	World.add(world, redBox2);

	redBox3 = new redBox(503, 610, 20, 100);
	World.add(world, redBox3);

	Engine.run(engine);


  car=createSprite(50,200,50,50);
  
 car.velocityX=speed;

 
var deformation=0.5*weight*speed*speed/22500
  
  if(deformation>180){
   car.shapeColor=color(255,0,0)
  }
 if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0)
 }
 if(deformation<100){
   car.shapeColor=color(0,255,0)
 }
}


  wall=createSprite(1500,200,60,height/2);
  wall.shapecolor=color(80,80,80);



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  show();

}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}

function show() {
	redBox1.display();
	redBox2.display();
	redBox3.display();
}
