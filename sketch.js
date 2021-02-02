const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground2;
var block1,block2,block3,block4;
var block5,block6,block7,block8;
var block9,block10,block11;
var polygon;
var sling;
var score = 0;
var bkg;
var bg;
var backgroundImg;

function preload(){
    getBackGroundImg()
    bkg = loadImage("Night sky.jpg");
    bg = loadImage("sky day.jpg");
    backgroundImg = loadImage("day sky 2.jpg");
}


function setup(){
     var canvas = createCanvas(800,500);
     engine = Engine.create()
     world = engine.world;

     ground = new Ground(475,400,300,15);
     block1 = new Block(475,300,50,50);
     block2 = new Block(450,300,50,50)
     block3 = new Block(450,300,50,50);
     block4 = new Block(475,300,50,50);
     
     ground2 = new Ground(600,200,300,15);
     block5 = new Block(600,100,50,50);
     block6 = new Block(600,100,50,50);
     block7 = new Block(600,100,50,50);
     block8 = new Block(650,20,50,50);
     block9 = new Block(650,20,50,50);
     block10 = new Block(550,30,50,50);
     block11 = new Block(550,30,50,50);

     polygon = new Polygon(175,250,15,15);
     sling = new SlingShot(polygon.body,{x:175,y:250});
}
function draw(){
    if(backgroundImg){
        background(backgroundImg);
   }
   else{
       background(bkg);
   }
    noStroke();
    textSize(25)
    fill("white")
    text("Score  "+ score, width-700, 50)

    Engine.update(engine);

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    ground2.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();
   block9.score();
   block9.score();
   block10.score();
   block11.score();

    polygon.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    
    if(keyCode === 32){

    sling.attach(polygon.body);
    }
}

async function getBackGroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>0600 && hour<1600){
      bkg 
    }
    else{
        bg 
    }
    backgroundImg = (bg);
    console.log(backgroundImg);
}