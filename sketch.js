
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
}


function draw() {
  background("lightBlue");
  stroke("lightBlue");
  textSize = 20;
  fill("lightBlue");
  text("score:"+score,500,500);
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
   
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   ground.x = ground.width/2;
   monkey.collide(ground);
  
  monkey.depth=ground.depth+2
    
  spawnFood();
  spawnObstacles();

  drawSprites();

}

function spawnFood(){
 if(frameCount%80 === 0){ 
 banana = createSprite(600,70)
 banana.y = Math.round(random(120,200));
 banana.addImage(bananaImage);
 banana.scale=0.1;
 banana.velocityX = -3;
 banana.lifetime = 300;
 foodGroup.add(banana);
 
 }  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
   
     obstacle.addImage(obstacleImage)    
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  obstacle.y = 328;
  
    obstacleGroup.add(obstacle);
 }
}






