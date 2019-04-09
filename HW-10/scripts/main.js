$(document).ready(function(){
    $(this).keypress(function(event){
       getKey(event);
    });
});

function getKey(event)
{
var char = event.which || event.KeyCode;
var actualLetter = String.fromCharCode(char);
console.log("Hi");
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
ctx.fillStyle = "0000FF";
drawSquare();

function drawSquare()
{
  ctx.clearRect(0,0,800,600);
  ctx.fillRect(x, y, 20, 20);
}
