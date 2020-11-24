
var movingRect,fixedRect;
function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400,100,20,30);
}

function draw() {
  
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  movingRect.debug=true;
  fixedRect.debug=true;

  if (fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="black"
    fixedRect.shapeColor="black"
  }


  drawSprites();
}