var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,580,170,35);
    surface1.shapeColor="blue";
    surface2=createSprite(300,580,170,35);
    surface2.shapeColor="orange";
    surface3=createSprite(500,580,170,35);
    surface3.shapeColor="purple";
    surface4=createSprite(700,580,170,35);
    surface4.shapeColor="green";

       
    //create box sprite and give velocity
    box=createSprite(random(20,750),100,50,50);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    

    edges=createEdgeSprites();

    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(isTouching(box,surface1)){
        box.bounceOff(surface1);
        box.shapeColor=surface1.shapeColor;
    }
    if(isTouching(box,surface2)){
        box.bounceOff(surface2);
        box.shapeColor=surface2.shapeColor;
        music.play();
    }
    if(isTouching(box,surface3)){
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(isTouching(box,surface4)){
        box.bounceOff(surface4);
        box.shapeColor=surface4.shapeColor;
    }

    

    /*if(touching(box,surface2)){
        box.velocityX=0;
        box.velocityY=0;
    }*/

    drawSprites();
}

function isTouching(object1,object2){
    if(object1.x-object2.x <object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 &&
        object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2){
        return true;

    }

}
