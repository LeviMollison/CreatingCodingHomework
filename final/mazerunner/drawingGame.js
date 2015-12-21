// they need to be specified, but theyr'e all related to each other
var grounds, enemies, treasures, players;
var gravity = .3;
var winCondition;

function drawMainGame(lvl){
  
  
  /* Draws the Level*/
  drawSprites();
  /* If the player is in the ground, set them on top of it */
  grounds.displace(players);
  if (!players[0].overlap(grounds))
    players[0].velocity.y += gravity;
  if (players[0].velocity.x > 0)
    players[0].velocity.x -= .1;
  if (players[0].velocity.x < 0)
    players[0].velocity.x += .1;
}

// Taking up too much space, spread out

function createPlayer(lvl){
  if (lvl == 1){
    players = new Group();
    player = createSprite(width/2, height-10, 11, 11);
    player.maxSpeed = 9;
    player.shapeColor = color(0,0,0);
    player.setCollider("square", 0,0, 11);
    players.add(player);
  }
}




function createBackground(lvl){
  if (lvl == 1){
    // Be able to do things with all the grounds
    grounds = new Group();
    
    var ground = createSprite(width/2,height,width,50); // x, y, width, height
    // Can it move
    ground.immovable = true;
    // Some basics
    var groundColor = color(255,213,121);
    var gWidth = 150;
    var gHeight = 27;
    
    
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-100, height - 100, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-350, height - 150, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-600, height - 200, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-350, height - 250, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-100, height - 300, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    ground = createSprite(width-750, height - 250, gWidth, gHeight);
    ground.immovable = true;
    ground.shapeColor = groundColor;
    grounds.add(ground);
    
    winCondition = createSprite (width-750, height - 300, 15,15);
  }
}
