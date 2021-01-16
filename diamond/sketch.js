var thief, thiefImage;
var background, backgroundImage;
var arrow, arrowImage, arrowGroup;
var fruit, fruit1, fruit2, fruit3, fruitGroup;
var hut, hutImage;
var castle, castleImage;
var ground;
var fruitScore;

function preload(){
    thiefImage = loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png","sprites/run4.png","sprites/run5.png","sprites/run6.png")
    backgroundImage = loadImage("sprites/background.jpg")
    arrowImage = loadImage("sprites/arrow.png")
    fruit1 = loadImage("sprites/orange.jpeg")
    fruit2 = loadImage("sprites/fruit2.png")
    fruit3 = loadImage("sprites/apple.jpeg")
    //castleImage = loadImage("sprites/castle.jpeg")
    //hutImage = loadImage("sprites/hut 1.jpeg")
}

function setup(){
    createCanvas(3500,600)
    ground = createSprite(1000,600,2000,20)

    thief = createSprite(50,530,10,40)
    thief.addAnimation("running",thiefImage)
 fruitGroup=createGroup();
  
fruitScore=0;

}

function draw(){
    background(backgroundImage)
    //ground.velocityX=-3;


    if(keyDown("w"))
    {
      thief.x=thief.x+5;
    }
    if(keyDown("space"))
    {
      thief.velocityY=-10;
    }
    thief.velocityY=thief.velocityY+0.5;

    thief.collide(ground);

    if(thief.isTouching(fruitGroup))
    {
        fruitGroup.destroyEach();
        fruitScore++;
    }
    if(keyDown("p"))
    {
       spawnSword();  
    }
    spawnFruit();
    //camera.position.x=ground.x
        drawSprites();
textSize(35)
fill("Black")
text("FruitScore:" + fruitScore ,100,100);


}
function spawnFruit()
{
if(frameCount%100===0)
    {
    fruit=createSprite( 1000,300)
    fruit.velocityX=-5;
    fruit.scale=0.3
    fruit.y=random(300,500)
    var r = Math.round(random(1,3));
        switch(r)
        {
            case 1: fruit.addImage(fruit1);
            break;
            case 2: fruit.addImage(fruit2);
            break;
            case 3: fruit.addImage(fruit3);
            break;
        }
        fruitGroup.add(fruit);
        fruit.lifetime=200;
    }
}
function spawnSword()
{

    sword=createSprite( 1000,300)
    sword.scale=0.3;
    sword.velocityX=3;
    sword.x=thief.x+35;
    sword.y=thief.y;
    sword.addImage(arrowImage);
    }
 