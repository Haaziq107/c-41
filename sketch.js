var player,playerImage,backgroundImage,homePage,Start;

function preload(){
    playerImage=loadImage("bs images/player.png");
    coinsImage=loadImage("bs images/coins.png");
    gemsImage=loadImage("bs images/gems.png");
    homepageImage=loadImage("bs images/homepage.png");
    mapImage=loadImage("bs images/map.png");
    haaziqImage=loadImage("bs images/haaziq.png");

}
function setup(){
    canvas=createCanvas(1200,800);

    player=createSprite(600,700);
    player.addImage(playerImage);
    player.scale=0.5;



}

function draw(){
    background("red")
    drawSprites();
}