var bullet,wall,thickness;
var speed,weight;
var obj1,obj2;
var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = ("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background("Black")
  if (wall.x-bullet.x < (wall.width+bullet.width)/2){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if (damage < 10){
    wall.shapeColor = ("Green")
    }else if (damage > 10){
      wall.shapeColor = ("Red");
    }
  }
  drawSprites();
}

