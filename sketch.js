var canvas;
var music;
var box1,box2,box3,box4,box5;
var block,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    box1=createSprite(10,580,100,20);
    box1.shapeColor="pink";

    box2=createSprite(200,580,100,20);
    box2.shapeColor="blue";

    box3=createSprite(400,580,100,20);
    box3.shapeColor="yellow";

    box4=createSprite(600,580,100,20);
    box4.shapeColor="purple";

    box5=createSprite(800,580,100,20);
    box5.shapeColor="green";
    //create box sprite and give velocity
   block=createSprite(Math.round(random(200,800)),80,20,20);
   block.velocityX=10;
   block.velocityY=12;
   music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  // 
    
   edges=createEdgeSprites();
   block.bounceOff(edges);

   if(box1.isTouching(block)){
    block.bounceOff(box1);
    block.shapeColor="pink";
   
}
if(box2.isTouching(block)){
    block.bounceOff(box2);
    block.shapeColor="blue";
}
if(box3.isTouching(block)){
    block.bounceOff(box3);
    block.shapeColor="yellow";
}
if(box4.isTouching(block)){
    block.bounceOff(box3);
    block.shapeColor="purple";
}
if(box5.isTouching(block)){
    block.velocityX=0;
block.velocityY=0;
block.shapeColor="green";
music.stop();

}
   

drawSprites();

    //add condition to check if box touching surface and make it box
}
