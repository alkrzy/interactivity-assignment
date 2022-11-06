/*
Interactive Project
Aleksandra Krzynowek
2022.11.7

Description
Since I have very little experience with coding, I decided to 
try to take an easier route by adding buttons and straying away
from cursor-related functions... turns out, that was probably the harder path!
 This ended up using both mouse clicks and key presses.

I wanted to do something cat-related, because I figured that choosing a subject
would leave me with a clearer idea of what I should do. I wanted to work out 
an idea similar to that of a random text generator/ word adventure, so this is
what I came up with. This took me WAY too much time. i suddenly have a much 
bigger respect for programmers.
*/

var cat1;
var cat12;
var wizard;

//let cat1;
//let cat12;
//let wizard;
//function preload() {
 // cat1 = loadImage("cat1.png");
 // cat12 = loadImage("cat12png.png");
  //  wizard = loadImage("wizard.png");


//}

let x, y;
let textButton;
let radioButton;

function setup() {
  createCanvas(800, 400);
  background(205, 246, 255);
  
  cat1 = loadImage("cat1 copy.png");
  cat12 = loadImage("cat12png copy.png");
  wizard = loadImage("wizard copy.png");

  //button to change cat color
  radioButton = createRadio(); //radio button
  radioButton.option("orange cat");
  radioButton.option("gray cat");
  radioButton.selected("orange cat");
  radioButton.position(10, 410);
  
  //wizard words button
  textButton = createButton("wise words from the wizard!");
  textButton.mousePressed(wizardword);
  textButton.position(600, 150);

  x = 0;
  y = height / 2.11;
  

}

function draw() {

  let s = "Choose your cat color, then click onto the game plane!";
  fill(50);
  text(s, 10, 20);

  let t = "Press the left or right arrow keys to move, and space to stop.";
  fill(50);
  text(t, 10, 40);

  let c = "Talk to the wizard cat!";
  fill(50);
  text(c, 10, 60);
  

  
  //grass 
  
  fill(112, 130, 56);
  square(0, 330, 800);
  image(wizard, 600, 200); //wizard cat


  

  //radio button
  let chosencat = radioButton.value();
  if (chosencat === "orange cat") {
   noStroke();
    fill(205, 246, 255);
  rect(x-10,y,200,139)
    image(cat1, x - 10, y);
  }
  if (chosencat === "gray cat") {
   noStroke();
    fill(205, 246, 255);
  rect(x-10,y,200,139)
    image(cat12, x - 5, y);
  }
  
  keyPressed();
 

}
 function keyPressed() {
  

  if (keyCode == LEFT_ARROW) {
    x -= 1;
  } else if (keyCode == RIGHT_ARROW) {
    x += 1;
    
  }
}

function wizardword() {
  let fortune = [
    "meow",
    "stay pawsitive",
    "slayyy",
    "MEOW",
    "youre pawsome",
    "dont furget to sleep 23 hours daily",
    "dont be a sourpuss",
  ];
  let words = random(fortune);
  noStroke();
  fill(205, 246, 255);
  rect(600,70,300,100)
  fill(50);
   text(words, 600, 100);
  
  
}

