
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rulesimg;
var startbtn;
var backgroundi;
var tank1
var tank2
var parachute;
var bg3
var tank1_wc_img
var tank2_wc_img
var cannonImg
var cannon;

var balls = [];

function preload(){
  backgroundimg=loadImage("backgrnd.jpg")
  tank1img=loadImage("tank1.png")

  tank2img=loadImage("tank2.png")

  bg3img=loadImage("bg3.jpeg")

  parachuteimg = loadImage("parachuteimg.png");

  tank1_wc_img= loadImage("tank1_wc.png")

  tank2_wc_img=loadImage("tank_without_2.png")

  //cannon_image = loadImage("cannon.png")





}


function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15

  backgroundi = createSprite(400,400,800,800);
  backgroundi.addImage(backgroundimg)
  backgroundi.visible=false
  backgroundi.scale = 5;

  bg3 = createSprite(400,400,800,800);
  bg3.addImage(bg3img)
  bg3.visible=false
  bg3.scale = 5;


rulesimg = createImg("RULES.jpg")
rulesimg.position(310,50);
rulesimg.size(800,800);




startbtn = createImg ("startbtn.jpg");
startbtn.position(1010,100);
startbtn.size(70,70);
startbtn.mouseClicked(bg)


tank1_wc = createSprite(500,605)
tank1_wc.addImage(tank1_wc_img)
tank1_wc.scale=0.5
tank1_wc.visible=false

tank2_wc = createSprite(500,600)
tank2_wc.addImage(tank2_wc_img)
tank2_wc.visible=false
tank2_wc.scale = 0.8


//cannonS = createSprite(410,579)
//cannonS.addImage(cannonImg)
//cannonS.visible= false
//cannonS.scale=0.3





cannon = new Cannon(390, 588, 95, 95, angle);





}





function draw() {
  background("white");  

  Engine.update(engine)

   

 if(mousePressedOver(tank1)){
  //spawnParachutes();
   tank1.visible=false
   //cannonS.visible=true
   
   tank1_wc.visible=true
   tank2.visible=false
   backgroundi.visible=false
   
   bg3.visible=true
 
 }
 if(mousePressedOver(tank2)){
  //spawnParachutes();
  tank1.visible=false
  tank2.visible=false
  tank2_wc.visible=true
  //cannonS.visible=true
  
  backgroundi.visible=false
  
  bg3.visible=true
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, index) {
  if (ball) {
    ball.display();
    ball.animate();
    if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
        ball.remove(index);
      
    }
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW ) {
    balls[balls.length - 1].shoot();
  }
}

  drawSprites();

  if(bg3.visible=== true){
   
    spawnParachutes();
    cannon.display();
   }
  
  
}

function bg(){
  backgroundi = createSprite(400,400,800,800);
  backgroundi.addImage(backgroundimg)
  backgroundi.visible=true
  backgroundi.scale = 5;
  rulesimg.hide()
  startbtn.hide()
  tank1= createSprite(300,100)
  tank1.addImage(tank1img)
  tank1.scale=0.8
  tank2=createSprite(300,300)
  tank2.addImage(tank2img)
  tank2.scale=0.5
 

  textSize(50)
  text("choose any one",200,200)

console.log ("check")

}

function spawnParachutes(){
  if(frameCount%60 === 0){
    parachute = createSprite(50,10,50,50);
    parachute.addImage(parachuteimg);
    parachute.y = Math.round(random(10,500));
    parachute.scale = 0.5;
    parachute.velocityY = 3;

  }
}