var alex, alexImg;
var z1, z2, z3, z4, z5;
var z1Img, z2Img, z3Img, z4Img, z5Img
var bullet,bulletImg;
var zombieGrp;

function preload(){

  z1Img = loadImage("assets/z1.png");
  z2Img = loadImage("assets/z2.png");
  z3Img = loadImage("assets/z3.png");
  z4Img = loadImage("assets/z4.png");
  z5Img = loadImage("assets/z5.png");
  alexImg = loadImage("assets/alex.png")
  bulletImg = loadImage("assets/bullet.png")
}

function setup() {
    createCanvas(1500,700);

    alex = createSprite(50,50,100,100);
    alex.addImage("Player", alexImg);
    alex.scale = 0.2;
    

    // z1 = createSprite(1400,200,20,20);
    // z1.addImage("Zombie 1", z1Img);
    // z1.scale = 0.2
    // z1.velocityX = -Math.random(5,10);

    // z2 = createSprite(1400,300,20,20);
    // z2.addImage("Zombie 2", z2Img);
    // z2.scale = 0.12;
    // z2.velocityX = -Math.random(5,10);

    // z3 = createSprite(1400,400,20,20);
    // z3.addImage("Zombie 3", z3Img);
    // z3.scale = 0.15;
    // z3.velocityX = -Math.random(5,10);

    // z4 = createSprite(1400,500,20,20);
    // z4.addImage("Zombie 4", z4Img);
    // z4.scale = 0.11;
    // z4.velocityX = -Math.random(5,10);

    // z5 = createSprite(1400,600,20,20);
    // z5.addImage("Zombie 5", z5Img);
    // z5.scale = 0.2;
    // z5.velocityX = -Math.random(5,10);

    
     zombieGrp = new Group();
    
    
}



function draw(){
    background("#654321")

    if(keyDown("down")){
      alex.y=alex.y+5;
    }
    if(keyDown("up")){
      alex.y=alex.y-5;
    }

    if(keyDown("right")){
    
      spawnBullets();

    }
    
    spawnZombies();


     if(Zombie.isTouching(bullet)){

      bullet.destroyEach();
      zombieGrp.destroyEach();

     }

    
    drawSprites();
}

function spawnBullets(){

  if(frameCount%20 === 0){
    bullet = createSprite(150,alex.y,10,10);
  bullet.addImage("Bullet", bulletImg);
  bullet.scale = 0.05;
  bullet.velocityX = 9.0;

  }

}

  function spawnZombies() {
    if(frameCount % 60 === 0) {
      var Zombie = createSprite(1400,165,10,40);
      Zombie.y = Math.round(random(100,1000));
      Zombie.velocityX = -4;
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: Zombie.addImage(z1Img);
                break;
        case 2: Zombie.addImage(z2Img);
                break;
        case 3: Zombie.addImage(z3Img);
                break;
        case 4: Zombie.addImage(z4Img);
                break;
        case 5: Zombie.addImage(z5Img);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      Zombie.scale = 0.12;
      Zombie.lifetime = 300;
      //add each obstacle to the group
      zombieGrp.add(Zombie);

      
    }
  }
  



