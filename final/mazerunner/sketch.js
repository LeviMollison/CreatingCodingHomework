
var player, win; // THESE ARE INDIVIDUAL SPRITES
// var wallTop, wallBottom, wallLeft, wallRight; // SO ARE THESE
// for the ground and enemies, code each one individually
var bricks; // BUT THIS IS A GROUP

var MAX_SPEED = 9;
var BRICK_W = 40;
var BRICK_H = 20;
var SPACEBETWEENBRICKS = 4;
var ROWS = 9;
var COLUMNS = 16;
var score = 0;

var lives; // NUMBER OF LIVES

/* Tells the game which screen to draw. This will switch between
    Title screen, level 1, 2, etc.
*/
var level = 1;

// SOUND STUFF:
var paddlesynth;
var bricksynth;

/*
  Let's break this up, part by part, from the basics upward. The most
  Important part about this game is seeing a title screen followed by menus
*/

function setup()
{
  createCanvas(800,600);
  createBackground(1);
  createPlayer(1);
}

function getMillis(){
  return Math.ceil(millis());
}

function draw()
{
  background(118,214,255);
  if (level == 0){
    fill(255 * ((millis()%500)>250));
    textSize(36);
    textAlign(CENTER);
    text("PRESS THE MOUSE TO BEGIN", width/2, height/2);
  }
  if (level == 1){
    // draw level 1
    drawMainGame(1);
  
  }
  // if you win the game
  if (level == 3){
    fill(255 * ((millis()%500)>250));
    textSize(36);
    textAlign(CENTER);
    text("YOU WON!!!!!", width/2, height/2);
  }
  
  if(keyDown(LEFT_ARROW))
    players[0].addSpeed(.2,180);
  if(keyDown(RIGHT_ARROW))
    players[0].addSpeed(.2,0);
  if(keyDown(UP_ARROW))
    players[0].addSpeed(-3, 90);
}

function mousePressed()
{
  
}

