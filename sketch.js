
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
cont Render = Matter.Rander;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(350,100,300,30);
	World.add(world,roff);

	boobObject1 = new Bob(250,300);
	boobObject2 = new Bob(300,300);
	boobObject3 = new Bob(350,300);
	boobObject4 = new Bob(400,300);
	boobObject5 = new Bob(450,300);

	rope1 = new Rope(bobObject1.body,roof.roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(boobObject2.body,roof.roof.body,-50,0);
	World.add(world.rope2);

	rope3 = new Rope(boobObject3.body,roof.roof.body,0,0);
	World.add(world.rope3);

	rope4 = new Rope(boobObject4.body,roof.roof.body,+50,0);
	World.add(world.rope4);

	rope5 = new Rope(boobObject5.body,roof.roof.body,+100,0);
	World.add(world.rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof.display();

  bobObject1.display();
  boobObject2.display();
  boobObject3.display();
  boobObject4.display();
  boobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}
function kePressed(){
if(keyCode===UP_ARROW){
Matter.Body.apply.Force(boobObject1.body,boobObject1.body.position,{x:-730,y:0});
}

}


