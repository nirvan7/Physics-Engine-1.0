const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Constraint= Matter.Constraint;

 var bow;
 var arrow;
 var backImg;
 var balloon= [];
 var blueballoon;
 var greenballoon;
 var redballoon;
 var pinkballoon;
 var Maxballoons=20;
// var gameState="launched"

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
 // blueballoon = new Balloon(400,300,10);
  arrow = new Arrow(675,300,20);
  bow = new Bow(650,240,20);
  slingshot= new Slingshot(arrow.body,{x:675,y:300})
  backImg=loadImage("images/background0.png");

  for (var i=0;i<Maxballoons;i++) {
    balloon.push(new Balloon(random(0,400),random(0,400),10));
  }
  
  Engine.run(engine);
}

function draw() {
  background(backImg);

 // createballoon();
// var rand = Math.round(random(1,4));
 //blueballoon.display(rand);
 bow.display();
 arrow.display();
 slingshot.display();
 Matter.Body.setPosition(bow.body, {x: 650 , y:mouseY});
 arrow.body.position.y=bow.body.position.y;
 for (var i=0;i<Maxballoons;i++) {
   balloon[i].display();
 }
 
 
 drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y:mouseY});
      console.log("help");
 //}
}

function mouseReleased(){
  //if (keyCode === 32){
  slingshot.fly();
  console.log("helllololllolollll");
 // gameState = "launched";
}

function createballoon(){
 rand = Math.round(random(1,4));
  if (frameCount%40 === 0){
     balloon = createSprite(random(10,370),random(10,30),10,10);
    switch(rand) {
      case 1:balloon.addImage(blueballoon);
      break;
      case 2:balloon.addImage(greenballoon);
      break;
      case 3:balloon.addImage(redballoon);
      break;
      case 4:balloon.addImage(pinkballoon);
      break;
      default:
      break;
     }
     balloon.scale=0.1;
     balloon.velocityX=2;
     balloon.velocityY=2;
    }
}