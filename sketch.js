

var chao,imagemchao
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
imagemchao = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
 trex  = createSprite (60,180,10,40)
trex.addAnimation("correndo",trex_running)
trex.scale = 0.53

chao = createSprite(60,190,400,10)
chao.addImage("chao",imagemchao)
}

function draw(){
  background("white")
  if (keyDown ("space")){
    
trex.velocityY =-10

  }
  trex.velocityY =+0.5
trex.collide(chao)

  drawSprites()

}
