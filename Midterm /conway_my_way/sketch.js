/*
  New Game: Logic Gate Simulation
  * Sources will send input shots that will be either on or off. 
      * Passing them through NOT gates will cause NOT gates to always glow green
      * Shots turn off when a gate returns a false (turn the shot off)
      * All lead to LED’s at the end which will flicker some decided color if they receive an on input
*/

// need smoothing algorithm
// how do i access a specific place in the image? (the starting points)
var threshold = 128; // is it black or white?
var howwide = 50;
var howtall = 50;
var firstShot = Math.floor(howtall / 3); // starting position?
var img = new Array(2); // this is gonna store two images
var whichimage = 0;

function setup() {
  createCanvas(600, 600);
  img[0] = createImage(howwide, howtall);
  img[1] = createImage(howwide, howtall);
  noSmooth();
  NOTPlacement = Math.floor(random(howwide));
  // make sure it's not at the start nor where the LED is
  while(NOTPlacement < (howwide/8) || NOTPlacement > 8 * (howwide/10))
     NOTPlacement = Math.floor(random(howwide));
}
// what if i want more than one?
var NOTPlacement;
// this is for the pulse
var pulse = [27,232,111];
var pulsePlaced = false;

// You would have to set both images up with the wire structure your'e gonna use first
// The pixels become the simulation board
function draw() {
  background(255, 255, 255, 10);
  img[whichimage].loadPixels(); // load pixels into memory
  img[1-whichimage].loadPixels(); // load pixels into memory
  // What do I want to know when accessing the pixels?
  /*
    MAKE THEM ALL COLORS!!!
    background: white
    1) are you an entrance to a logic gate? (0,0,0) 
    2) are you a wire? (125,147,92)
    3) are you the exit of a logic gate? (0,0,20)
    4) are you a logic gate? NOT(99,201,214)
    5) are you the entrance of an LED? (0,0,10)
    6) are you an LED? (252,120,60)
    7) do we or do we not need to keep track of the pulse?
       *On (27,232,111) 
       *Off (212,53,53)
  */
  /*
    Looks like to set up the project, we are going to
    need to teach the image how to draw itself
  */
  
  for (var i = 0; i < howwide; i++)
  {
    for (var j = 0; j < howtall; j+=firstShot)
    {
      // set wires for now
      var startPix = img[1-whichimage].get(0,j);
      if(pulsePlaced && startPix[0] === pulse[0])
      {
        
      } 
      else
        img[1-whichimage].set(i, j, color([125,147,92]));
        
      // set LED's at end
      if(i >= (howwide-2))
        img[1-whichimage].set(i,j,color(252,120,60));
      // randomly placing Logic gates on wires?
      
      // if it's on a wire and at NOTPLacement
      if (i == NOTPlacement)
        img[1-whichimage].set(i,j,color(99,201,214));
      // start the pulse as positive
      if (!pulsePlaced && i === 0)
        {
          img[1-whichimage].set(i,j,color(pulse));
          
          pulsePlaced = true;
        }
    }
  }
  // let's use this for now, and make something that traverses the line
  for (var i = 0; i < howwide; i++)
  {
    for (var j = 0; j < howtall; j+=firstShot)
    {
      
    }
  }
 
  img[1-whichimage].updatePixels(); // update pixels on destination

  whichimage = 1-whichimage; // flip source and destination
  image(img[whichimage], 0, 0, width, height); // draw the new source
}

function mouseClicked()
{
  fillatmouse();
}

function mouseDragged()
{
  fillatmouse();
}

function keyReleased() // blow out the image with new stuff
{
  randomize();
}

// this completely recreates the simulation with binary noise (cells are on or off)
function randomize()
{
  var randthresh = 8; // 80% of pixels will be dead.
  img[whichimage].loadPixels(); // load pixels into memory
  img[1-whichimage].loadPixels(); // load pixels into memory
  for (var i = 0; i < img[whichimage].width; i++) {
    for (var j = 0; j < img[whichimage].height; j++) {
      var r = random(10)>randthresh; // true or false?
      var thecolor = color(r*255);
      img[whichimage].set(i, j, thecolor, thecolor);
      img[1-whichimage].set(i, j, thecolor, thecolor);
    }
  }
  img[whichimage].updatePixels(); // update pixels
  img[1-whichimage].updatePixels(); // update pixels

}

// set a pixel at the mouse position to ON
function fillatmouse()
{
  img[whichimage].loadPixels();
  var thex = floor(mouseX/(width/howwide));
  var they = floor(mouseY/(height/howtall));
  img[whichimage].set(thex, they, color(255));
  img[whichimage].updatePixels();
}