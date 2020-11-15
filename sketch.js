var bullet,wall,speed,thickness,weight

function setup() {
createCanvas(1600,400)
speed=Math.round(random(55,90))
weight=Math.round(random(400,1500))
thickness=Math.round(random(22,83))

bullet=createSprite(50,200,50,5)
bullet.velocityX=speed;
bullet.shapeColor=color("yellow")

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(255)

}
function draw() {
  background(1600,400,400);  

 
if(bullet.collide(wall)){

  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}


}

 
  drawSprites()}