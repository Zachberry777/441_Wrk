


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 25;
var x2 = 200;
var y2 = 200;
var square1 = new Square(x,y,20,20);

var square2 = new Square(x2,y2,20,20);
ctx.fillStyle = "0000FF";

drawSquare();

c = 4;
d = 5;
calculateSum(c,d);
function calculateSum(a, b)
{
  return a +b;
}

function drawSquare()
{
  ctx.clearRect(0,0,800,600);
  ctx.fillRect(square1.x,square1.y, square1.width, square1.height);
  ctx.fillRect(square2.x,square2.y, square2.width, square2.height);



}

$(document).ready(function(){
    $(this).keypress(function(event){
       getKey(event);
    });
});

function getKey(event)
{
var char = event.which || event.KeyCode;
var actualLetter = String.fromCharCode(char);
if(actualLetter == "a")

{
  moveLeft();
}
else if(actualLetter =="s")
{
  moveDown();
}
else if (actualLetter =="d")
{
  moveRight();
}
else if (actualLetter =="w")
{
  moveUp();
}




   if(hasCollided(square1,square2))
   {
     square2.color = "black";
      square2.w *= 1.12;
      square2.h *= 1.12;
      var canvasColor = document.getElementById("myCanvas");
      canvasColor.style.background = "red";
   }
   drawSquare();
}
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function moveUp()
{
square1.ycoord -= 10;
}
function moveLeft()
{
    square1.xcoord -= 10;
}

function moveRight()
{
    square1.xcoord += 10;
}

function moveDown()
{
    square1.ycoord += 10;
}
