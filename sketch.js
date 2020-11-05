const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;

function setup() {
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var object_option={
   isStatic:true
 }
 object=Bodies.rectangle(200,100,50,50,object_option);
 World.add(world,object);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect (object.position.x,object.position.y,50,50);

}