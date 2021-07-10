var ship;
var groundImage;
var ground;
function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  groundImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 ground=createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x=ground.width/2;
  ship = createSprite(250,250,20,50);
  ship.addAnimation("sailing", ship_sailing);
  ship.scale = 0.3;
  ship.x = 50
}

function draw() {
  background("blue");
  ground.velocityX=-2;
  console.log(ground.x);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

  drawSprites();
}