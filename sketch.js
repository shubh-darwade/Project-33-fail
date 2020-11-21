const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var xy=[];
var gameState="play";

var xypos;

var engine,world,ground
var particle;
var divisionHeight=300;
var score =0,count = 0;
function setup() {
  createCanvas(800, 800);
   engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    

    
}
 


function draw() {
  background("black");

  

  textSize(20);
 text("Score : "+score,20,30);

 textSize(30);
 text("500",15,600);
 text("500",95,600);
 text("500",175,600);
 text("500",255,600);

 text("100",335,600);
 text("100",415,600);
 text("100",495,600);
 
 text("200",575,600);
 text("200",655,600);
 text("200",735,600);
  
  Engine.update(engine);
 fill("yellow");
 rectMode(CENTER);
 rect(width/2,450,width,10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,650, 10, divisionHeight));
   
  }



   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(count >= 5)
   {
     gameState="end";
     
     textSize(150);
     text("Game Over",10,400);
   }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
  if(particle!=null)
  {
    

    particle.display();
    if(particle.body.position.x < 320 && particle.body.position.y > 450 && particle.body.position.y < 460)
    {
      score=score+500;
    }

    if(particle.body.position.x > 320 && particle.body.position.x < 560 && particle.body.position.y > 450 && particle.body.position.y < 455)
    {
      score=score+100;
    }

    if(particle.body.position.x > 560 && particle.body.position.y > 450 && particle.body.position.y < 455)
    {
      score=score+200;
    }
  }
  
  }

function mousePressed()
{
  if(gameState ==="play")
  {
    particle = new Particle(mouseX,mouseY,10);

    xypos = particle.body.position;
    xy.push(xypos);
    count++;
   
    
  }
}