var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  

var select_sprites = Math.round(random(1,3));


if(frameCount %  80 == 0){
  
  if(select_sprites ==1){
 createApples();
 } else if (select_sprites == 2){
  createOrangeL();
 } else if (select_sprites ==3){
  createRedL();
 }
}

}




//função para criar as maçãs aleatorias
function createApples(){
 apple = createSprite (random(50,350),40,10,10);
 apple.addImage(appleImg);
 apple.scale=0.07;
apple.velocityY= 3;
apple.Lifetime = 150;
}

function createOrangeL(){
orangeL = createSprite (random(50,350),40,10,10);
orangeL.addImage(orangeImg);
orangeL.scale=0.06
orangeL.velocityY=3;
orangeL.Lifetime = 150

}

function createRedL(){
  redL = createSprite (random(50,350),40,10,10);
  redL.addImage(redImg);
  redL.scale = 0.06
  redL.velocityY=3;
  redL.Lifetime = 150
}

rabbit.x = World.mouseX;