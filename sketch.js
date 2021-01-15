var canvas;
var music;
var sur1, sur2, sur3, sur4, ball;
var ran;
var up, left, right;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
up = createSprite(400,1,800,1);
left = createSprite(1,300,1,600);
right = createSprite(800,300,1,600);
up.visable = false;
left.visable = false;
right.visable = false;

sur1 = createSprite(110,570,200,30);
sur2 = createSprite(320,570,200,30);
sur3 = createSprite(530,570,200,30);
sur4 = createSprite(740,570,200,30);

sur1.shapeColor = "blue";
sur2.shapeColor = "orange";
sur3.shapeColor = "red";
ran = Math.round(random(20,750));
sur4.shapeColor = "green";
ball = createSprite(ran, 100, 30,30,);
ball.velocityY = 7;
ball.velocityX = 7;
}

function draw() {
    background(0);
if (ball.isTouching(sur1)) {
ball.bounceOff(sur1);
ball.shapeColor = "blue";
}

if (ball.isTouching(sur2)) {
ball.bounceOff(sur2);
ball.shapeColor = "orange";
}
    
if (ball.isTouching(sur3)) {
ball.shapeColor = "red";
ball.velocityX = 0;
ball.velocityY = 0;
}

if (ball.isTouching(sur4)) {
ball.bounceOff(sur4);
ball.shapeColor = "green";
}

if (ball.isTouching(up)) {
    ball.bounceOff(up);
}

if (ball.isTouching(left)) {
    ball.bounceOff(left);
}

if (ball.isTouching(right)) {
    ball.bounceOff(right);
}
        
drawSprites();
}
