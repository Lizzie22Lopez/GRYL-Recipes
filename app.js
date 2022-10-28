//You've got part of the logic right for the slider/trackbar so it changes x only within a range. This happens horizontally only at this stage, but you can use the same logic to check horizontal limits as well. Similarly, you can check if the cursor is within the bounds of any rectangle (be it the slider or either of the buttons):

let x=75;

void setup() {
  size(600, 400);
}

void draw() {
  background(100);
  
  // slider
  fill (200);
  rect (75, 25, 400, 50);
  stroke(0);
  if (mousePressed) {
    if (mouseX >75 && mouseX <= 475)
    {
      x=mouseX;
    }
  }

  fill(127, 0, 0);
  rect (x, 20, 9, 60); 
  fill (255);

  // left arrow button
  fill (200);
  rect (10, 25, 50, 50);
  fill(0);
  if (mousePressed == true) {
    if (mouseX > 10 && mouseX <= 10 + 50 && mouseY > 25 && mouseY <= 25 + 50){
      fill(255);  
    }
  }
  triangle (50, 60, 50, 40, 15, 50);

  // right arrow button
  fill (200);
  rect (490, 25, 50, 50);
  fill(0);
  if (mousePressed == true) {
    if (mouseX > 490 && mouseX <= 490 + 50 && mouseY > 25 && mouseY <= 25 + 50){
      fill(255);  
    }
  }
  triangle (500, 60, 500, 40, 535, 50);


  println(x);
}

//Wouldn't it be nice if you could take that logic and instead of copy/pasting the different x,y,width,height parameters for the same 4 statements you could group that functionality in a reusable block of code ?

//That what functions are for. You're already using them already (defining setup()/draw(), calling background()/fill()/etc.

//The Processing Button example already provides the boolean overRect(int x, int y, int width, int height) function which is perfect for you're trying to achieve: pass in the x,y,width,height or a button and get back boolean value.

//Here's your code using the overRect():

let x=75;

void setup() {
  size(600, 400);
}

void draw() {
  background(100);
  
  // slider
  fill (200);
  rect (75, 25, 400, 50);
  stroke(0);
  if (mousePressed) {
    if (mouseX >75 && mouseX <= 475)
    {
      x=mouseX;
    }
  }

  fill(127, 0, 0);
  rect (x, 20, 9, 60); 
  fill (255);

  // left arrow button
  fill (200);
  rect (10, 25, 50, 50);
  fill(0);
  if (mousePressed && overRect(10, 25, 50, 50)) {
    fill(255);  
    x--;
  }
  triangle (50, 60, 50, 40, 15, 50);

  // right arrow button
  fill (200);
  rect (490, 25, 50, 50);
  fill(0);
  if (mousePressed && overRect(490, 25, 50, 50)){
      fill(255);
      x++;
  }
  triangle (500, 60, 500, 40, 535, 50);

  // ensure x remains within the slide limits
  x = constrain(x, 75, 475);
  println(x);
}

boolean overRect(let x, let y, let width, let height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}