var wall1,wall2,wall3,car1,car2,car3,speed1,speed2,speed3,weight;

function setup() {
  createCanvas(1600,1000);
  wall1 = createSprite(1500, 200, 50, 100);
  wall1.shapeColor = (80,80,80);
  wall2 = createSprite(1500, 400, 50, 100);
  wall2.shapeColor = (80,80,80);
  wall3 = createSprite(1500, 600, 50, 100);
  wall3.shapeColor = (80,80,80);
  car1 = createSprite(0,200,50,50);
  car2 = createSprite(0,400,50,50);
  car3 = createSprite(0,600,50,50);


  speed1 = random(50,200);
  speed2 = random(25,195);
  speed3 = random(75,215);
  weight = random(30,52);
  
}  

function draw() {
  background(255,255,255);
  
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;

  

  if(car1.isTouching(wall1)){
     car1.velocityX = 0;

     if(speed1 <= 100){
        car1.shapeColor = "green";
     }

     if(speed1 >100){
      car1.shapeColor = "yellow";
   }

   if(speed1 > 180){
    car1.shapeColor = "red";
 }
  }

   if(car2.isTouching(wall2)){
    car2.velocityX = 0;

    if(speed2 <= 100){
       car2.shapeColor = "green";
    }

    if(speed2 >100){
     car2.shapeColor = "yellow";
  }

  if(speed2 >180){
   car2.shapeColor = "red";
}
 }

 if(car3.isTouching(wall3)){
  car3.velocityX = 0;

  if(speed3 <= 100){
     car3.shapeColor = "green";
  }

  if(speed3 >100){
   car3.shapeColor = "yellow";
}

if(speed3 >180){
 car3.shapeColor = "red";
}
}
  

  drawSprites();


}
