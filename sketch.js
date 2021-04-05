function setup() {
  createCanvas(1366,690);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  ellipseMode(RADIUS)
  
}

function draw() {
  background(0); 
  
  
 hr=hour();
 /* if(hr>12){
    hr=hr-12;
  }*/
  mins=minute();
  sec=second();
  
  secAngle=map(sec,0,60,0,360);
  minsAngle=map(mins,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);
  
  
  strokeWeight(8);
  
  translate(683,345);
  rotate(-90)
  push();
 
  stroke(0,99,255);
  noFill()
  arc(0,0,150,150,0,hrAngle)

  stroke(255,0,0)
  arc(0,0,160,160,0,minsAngle);

  stroke(0,255,0);
  arc(0,0,170,170,0,secAngle);
pop();
push();
  stroke(0,99,255);
  rotate(hrAngle)
 // rotate(hrAngle);
  line(0,0,100,0);
  pop();
  push();

  //rotate(radians(minsAngle))
  rotate(minsAngle)
  stroke(255,0,0)
  line(0,0,110,0);
  pop();
  push();
  //rotate(radians(secAngle))
  rotate(secAngle);
  stroke(0,255,0)
  line(0,0,120,0);
  //rotate()
  pop();
  stroke("yellow")
  point(0,0)

//console.log(hr)
 
 drawSprites();
}