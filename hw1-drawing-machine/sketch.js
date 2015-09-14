var redTrack, blueTrack, greenTrack; // rotating balls tracking variables

function setup() {
  createCanvas(1200,600);
  background(0);
  redTrack = {angle:0, mult:50, size:0, rgb:255};
  blueTrack = {angle:50, mult:100,size:0, rgb:255};
  greenTrack = {angle:250, mult:150,size:0, rgb:255};
}

function draw() {
  // Let's try creating red track
  redTrack.size =  redTrack.mult * cos(radians(redTrack.angle));
  // value, start1, stop1, start2,stop 
  fill(redTrack.rgb,0,0); //redTracks fill
  redTrack.rgb = map(abs(cos(radians(redTrack.angle))), 0, 1, 0, 255); // playing around with map
  ellipse(width/2.5, height/3, redTrack.size, redTrack.size);
  redTrack.angle = redTrack.angle + .4;
  
  // blueTrack
  blueTrack.size =  blueTrack.mult * cos(radians(blueTrack.angle));
  // value, start1, stop1, start2,stop 
  fill(0,0,blueTrack.rgb); //redTracks fill
  blueTrack.rgb = map(abs(cos(radians(blueTrack.angle))), 0, 1, 0, 255); // playing around with map
  ellipse(width/1.5, height/3, blueTrack.size, blueTrack.size);
  blueTrack.angle = blueTrack.angle + .1;
  
  // greenTrack
  greenTrack.size =  greenTrack.mult * cos(radians(greenTrack.angle));
  // value, start1, stop1, start2,stop 
  fill(0,greenTrack.rgb,0); //greenTracks fill
  greenTrack.rgb = map(abs(cos(radians(greenTrack.angle))), 0, 1, 0, 255); // playing around with map
  ellipse(width/8, height/3, greenTrack.size, greenTrack.size);
  greenTrack.angle = greenTrack.angle + .3;
  
  // give our users a drawing limit
  fill(redTrack.rgb,greenTrack.rgb,blueTrack.rgb); //redTracks fill
  var useThisY = mouseY;
  if (useThisY < height/2) useThisY = height/2;
  if (useThisY > height) useThisY = height;
  var useThisX = mouseX;
  if (useThisX > width ) useThisX = width;
  if (useThisX < 0) useThisX = 0;
  ellipse(mouseX, useThisY, 5,5);
}

function keyReleased()
{
  if(key==' ') background(0);;

}