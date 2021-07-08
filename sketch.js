var bg,bgImg;
var iss, issImg, sc, scImg;
var left,right,down;
var hasDocked;

function preload(){
bgImg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
scImg = loadImage("spacecraft1.png");
left = loadImage("spacecraft4.png");
right = loadImage("spacecraft3.png");
down = loadImage("spacecraft2.png");
}

function setup() {
  //default values=800,400;
  createCanvas(800,800);
  bg = createSprite(200,200);
  bg.addImage(bgImg);
  bg.scale=2;

  iss = createSprite(380,230,20,20);
  iss.addImage(issImg);
  iss.scale=0.9;

  sc = createSprite(410,400,20,20);
  sc.addImage(scImg);
  sc.scale=0.27;

}

function draw() {
  background("bg"); 

  sc.depth = iss.depth;
  iss.depth = iss.depth+1;

  if(!hasDocked){
    Right();
    Left();
    Up();
    Down();
  }

  drawSprites();
}

//function right,left,up and down;

function Right(){
  if(keyDown("right")){
    sc.x = sc.x+2;
  }
  if(keyWentDown("right")){
    sc.addImage(right);
  }
  if(keyWentUp("right")){
    sc.addImage(scImg);
  }
}

function Left(){
  if(keyDown("left")){
    sc.x = sc.x - 2;
    }
    if(keyWentDown("left")){
      sc.addImage(left);
    }
  if(keyWentUp("left")){
    sc.addImage(scImg);
  }
}

function Up(){
if(keyDown("up")){
  sc.y = sc.y-2;
}
}

function Down(){
  if(keyDown("down")){
    sc.y = sc.y + 2;
    }
  if(keyWentDown("down")){
    sc.addImage(down);
  }
  if(keyWentUp("down")){
    sc.addImage(scImg);
    }
}