/* Music Pong
coding reference from Anna Wasson https://editor.p5js.org/annawasson/sketches/BQFIoo6s2 
and an assignment from last semester https://editor.p5js.org/biancaagan/sketches/p5wxzFhOV
*/

let synth = new Tone.Synth()
synth.toDestination();
let f = 300; // in Hertz
let scale = [];

let n = 12;

let ball;
let score = 0;
let freq;

let changeF;

function setup(){
  createCanvas(500, 500);
  
  ballButton = createButton('New Ball');
  ballButton.position(150, 7);
  ballButton.mousePressed(newBall);
  
  fButton = createButton('Change Frequency');
  fButton.position(240, 7);
  fButton.mousePressed(changeFreq);
  
  // changeF = createSlider(100, 900, 400, 1);
  // changeF.position(25, 25);
  // changeF.style('width', '80px');
  
  // 0. By hand pentatonic scale
  //scale = [200, 225, 266.7, 300, 337.5, 400]; 
  
  // 1. Derive pentatonic scale  
  scale[0] = f;
  scale[3] = f * 3 / 2;
  scale[5] = f * 2;
  scale[2] = scale[5] * 2 / 3;
  scale[1] = scale[3] * 3 / 4;
  scale[4] = scale[1] * 3 / 2;
  console.log("pentatonic scale: ", scale); 
  
  // Random Ball
  ball = new Ball(random(0, width), 20, (5, 9), (-4, -7));
}

function draw(){
  background(0);
  
  //f = changeF.value();
  
  // Paddle
  fill(255);
  rect(mouseX, 475, 90, 15);
   
  ball.bounce();
  ball.move();
  ball.display();
  
  paddle();
  
  //console.log(ball.x);
  // console.log(ball.x, ball.y);

  // Sound Triggers
  // Paddle
  if((ball.x > mouseX &&
     ball.x < mouseX + 90) &&
     (ball.y + 10 >= 475)){
    synth.triggerAttackRelease(f, "8n");
    freq = round(f, 2);
  }
  // 0
  if(ball.x <= width/2 && ball.y <= 5){
    synth.triggerAttackRelease(scale[0], random(2, 16) +"n");
    freq = round(scale[0], 2);
  }
  // 1
  if(ball.x >= width/2 && ball.y <= 5){
    synth.triggerAttackRelease(scale[1], random(2, 16) +"n");
    freq = round(scale[1], 2);
  }
  // 2
  if(ball.x <= 5 && ball.y <= height/2){
    synth.triggerAttackRelease(scale[2], random(2, 16) +"n");
    freq = round(scale[2], 2);
  }
  // 3
   if(ball.x >= 495 && ball.y <= height/2){
    synth.triggerAttackRelease(scale[3], random(2, 16) +"n");
    freq = round(scale[3], 2);
  }
  // 4
  else if(ball.x <= 0 && ball.y >= height/2){
    synth.triggerAttackRelease(scale[4], random(2, 16) +"n");
    freq = round(scale[4], 2);
  }
  // 5
  else if(ball.x >= 495 && ball.y >= height/2){
    synth.triggerAttackRelease(scale[5], random(2, 16) +"n");
    freq = round(scale[5], 2);
  }

  
  // Score
  fill(255);
  textSize(24);
  text("Score: " + score, 10, 25);
  
  if(ball.y >= 498){
    synth.triggerAttackRelease(f, "2n");
    score--;
  }
  
  // Frequency
  fill(255);
  textSize(24);
  text("Frequency: " + freq + " Hz", 10, 50);
  
}
  
  
function changeFreq(){
  f = random(100, 900);
  scale[0] = f;
  scale[3] = f * 3 / 2;
  scale[5] = f * 2;
  scale[2] = scale[5] * 2 / 3;
  scale[1] = scale[3] * 3 / 4;
  scale[4] = scale[1] * 3 / 2;
  console.log("pentatonic scale: ", scale); 
}

function newBall(){
  ball = new Ball(random(0, width), 20, (5, 9), (-5, -9));
}

function paddle(){
  if((ball.x > mouseX &&
     ball.x < mouseX + 90) &&
     (ball.y + 10 >= 475)) {
       // ball.xspeed *= -1;
       // ball.yspeed *= -1;
      ball.xspeed = -random(5, 11);
      ball.yspeed = -random(5, 11);
       score++;
     }
}





  // // Sound Quadrants
  // // 0
  // if(ball.x < width/2 && ball.y < height/3){
  //   synth.triggerAttack(scale[0]);
  // } 
  // // 1
  // else if(ball.x > width/2 && ball.y < height/3){
  //   synth.triggerAttack(scale[1]);
  // }
  // // 2
  // else if(ball.x < width/2 && ball.y > height/3 && ball.y < 2*height/3){
  //   synth.triggerAttack(scale[2]);
  // }
  // // 3
  // else if(ball.x > width/2 && ball.y > height/3 && ball.y < 2*height/3){
  //   synth.triggerAttack(scale[3]);
  // }
  // // 4
  // else if(ball.x < width/2 && ball.y > 2*height/3){
  //   synth.triggerAttack(scale[4]);
  // }
  // // 5
  // else if(ball.x > width/2 && ball.y > 2*height/3){
  //   synth.triggerAttack(scale[5]);
  // }

// function keyPressed(){
//   let pos = parseInt(key) % n - 1;  
//   console.log("current frequency: ", scale[pos]);  
//   synth.triggerAttack(scale[pos]);


    
// }

// function keyReleased(){
//   synth.triggerRelease();
// }