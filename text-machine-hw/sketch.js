/*
Text Machine Idea
  - Tell me a story
    The words in a given chapter will flow onto the screen in a pattern, then flow out in the same fashion they
    came into the page. Once on the page, the computer will read out the story to the reader with cute animation
    s occuring in the background and each word being read highlighting and dehighligting, then the words will 
    flow out once the computer reads the last word. 
    
  - Components Necessary
    1) A Story
      - Sherlock Holmes, Hounds of Baskerville
    2) A pleasent to read on background
    3) 7-8 different word flow patterns
    4) fonts
    5) voice reader
    6) 7-8 different cute animations to occur during reading state (on sides)
*/
var story;
var thefont;
function preload(){
  thefont = loadFont('./data/Mom-Outline.ttf');

  
}

function setup() {
  createCanvas(1200, 800);
  background(105,252,199);
  // Slows the drawing process down
  frameRate(60);
}

var angle = 2;
var d = 1; //distance
var r = 3; //acceleration
var xpos = 26;
var ypos = 26;
// Let's get pattern designs for now 
function draw() {
  // Clears uneccessary drawings
  background(105,252,199);
  ellipse(width/2, height/2, 20, 20);
  
  // Rotates the following codes
  // originX + sin(angle)*radius;
  xposnew = xpos + 40*sin(angle)*r;
  // originY + cos(angle)*radius;
  yposnew = ypos + 40*cos(angle)*r;
  angle = angle+1;
  
  // Creates objects that will roate around the image
  // circumference of a circle = 2pir
  /*
    Rotating the objects creates a pain on the eyes to be able to track movements, so instead let's tell
    an object to rotate around a circumference of some abstract circle. the x and y max positions are
    mapped to the radius size. So we'll have to creatively use the map of some circle and tell the objects
    To move along this pathway. Figure it out!
  */
  ellipse(xposnew, yposnew, 20, 20);
  
  /*but really let's get text to show first*/
}