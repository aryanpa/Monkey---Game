
var ground
var monkey , monkey_running,monkey_collided
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime

function preload(){
  
  monkey_collided = loadAnimation("sprite_0.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
  
  survivalTime = 0;
  
}


function draw() {
 background("white");
  
    stroke("black");
    textSize(20);
    fill("black");
    text("Survival "+"Time = "+survivalTime,100,50);
  
    
    
    survivalTime = Math.ceil(frameCount/frameRate());
    
    
    ground.velocityX = -4;
  
    if(keyDown("space") && monkey.y >= 250){
       monkey.velocityY = -12;
}  

    monkey.velocityY = monkey.velocityY +0.8;
      
  if(obstacleGroup.isTouching(monkey)){
   ground.velocityX = 0
   monkey.velocityY = 0 
   obstacleGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setVelocityXEach(0);
   FoodGroup.setLifetimeEach(-1);
   monkey.changeAnimation("collided",monkey_collided);
    
    
  }  
     
  
  
 
  
if(ground.x < 0){
  ground.x=ground.width/2;
}
  
  console.log(monkey.velocityY);
  

  
  monkey.collide(ground);
  

   

  
  food();
  
  obstacle();
  
  drawSprites();
  
}

function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(500,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    banana.lifetime = 300;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth +1;
    
    FoodGroup.add(banana);
    
  }
}

function obstacle(){
  
  if(frameCount % 300 === 0){
    rock = createSprite(500,327,20,20);
    rock.addImage(obstaceImage);
    rock.scale = 0.1;
    rock.velocityX = -8;
    rock.lifetime = 300;
    
    obstacleGroup.add(rock);
    
  }
}



