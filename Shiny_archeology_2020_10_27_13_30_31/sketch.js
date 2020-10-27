var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey , monkey_running
var banana ,bananaImage, obs, obsImage
var FoodGroup, obstacleGroup
var jungle, jungleImage,invisibleground;
var invisibleground;
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obsImage = loadImage("obstacle.png");
  jungleImage = loadImage("ground.png");
 
}



function setup() {
  
 createCanvas(600,400) 
 monkey = createSprite(150,280,10,20)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  

  jungle = createSprite(600,350,10000,10)
  jungle.velocityX=-5;
  
  banana = createSprite(500,320,10,10);
  banana.addImage("banana",bananaImage);
  banana.scale=0.2
  banana.velocityX=-3
  
   invisibleground = createSprite(200,190,400,10);
  invisibleground.visible = false;
        
  obs = createSprite(800,280,10,10);
  obs.addImage("obs",obsImage);
  obs.scale=0.4
  obs.velocityX=-3
}


function draw() {

  background("white")

  
  
   if(keyDown("j") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
                   
  
    if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
    
          
  
monkey.collide(invisibleground)

  drawSprites()
  
  
}



