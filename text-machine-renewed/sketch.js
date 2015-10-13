var sherlock; // this is gonna hold the text file

var thewords = new Array();
var thechain = {}; // new JSON

var thecurrentword = 'usually';

var xpos = 20;
var ypos = 30;

function preload() {
  // ignore the bullshit error that happens when you do this:
  sherlock = loadStrings('data/sherlock.txt');
}

function setup() {
  createCanvas(800, 600);
  frameRate(4);

  var bigstring = ""; // the WHOLE BOOK in one HUGE STRING
  // concatenate whole book into one string:
  for (var i = 0; i<sherlock.length; i++)
  {
    bigstring+=sherlock[i]+" ";
  }
  thewords = bigstring.split(' ');

  domarkov();
}
var idx = 0;
// store words here
var writtenwords = {};

function draw() {
  background(255);
  textSize(32);
  console.log(thecurrentword);
  fill(0)
  var tempx = 20;
  var tempy = 30;
  for (var word in writtenwords)
  {
    text(word, tempx, tempy);
    if(tempx>width/3)
    {
      tempx = 20;
      tempy = tempy + 36;
    }
    tempx += textWidth(word);
  }
  
  fill(255,0,0);
  text(thecurrentword, xpos, ypos);
  xpos = xpos + textWidth(thecurrentword + ' ');
  if(xpos>width/3)
  {
    xpos = 20;
    ypos = ypos + 36;
  }
  if(ypos>height) {
    background(255);
    ypos = 30;
    writtenwords = {};
    idx = 0;
  }
  writtenwords = [thecurrentword + ' '];
  idx += 1;
  thecurrentword = pickword(thecurrentword);
}



function pickword(n)
{
  var pick = floor(random(0, thechain[n].length));
  return(thechain[n][pick]);
}

function domarkov()
{
  for(var i = 0;i<thewords.length;i++)
  {
    if(!thechain[thewords[i]]) { // isn't there yet
        //console.log(thewords[i] + " ain't there yet... adding... " + thewords[(i+1)%thewords.length]);
        thechain[thewords[i]] = new Array();
        thechain[thewords[i]][0] = thewords[(i+1)%thewords.length];
      }
      else { // it's there already
        thechain[thewords[i]].push(thewords[(i+1)%thewords.length]);
        //console.log("adding " + thewords[(i+1)%thewords.length] + " to " + thewords[i]);
      }
  }
}