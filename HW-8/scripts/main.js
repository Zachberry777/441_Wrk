var camSelector = "#camera";
var allCameras = new Array();
class CameraInfo{
  constructor(selector, imagePath)

  {
    this.selector = selector;
    this.imagePath = imagePath;
  }

    get theSelector(){
      return this.selector;
    }

  get theImagePath(){
    return this.imagePath;
  }

   toString()
   {
     return this.selector + ":" + this.imagePath;
   }
}

function initializeArray()
{
  var camera = new CameraInfo("#camera","images/camera.jpg");
  allCameras.push(camera);
}
$(document).ready(function(){
 console.log(allCameras[0].toString());
 console.log(allCameras[0].theSelector);
 console.log(allCameras[0].theImagePath);


 $(allCameras[0].theSelector).attr("src", allCameras[0].theImagePath);

  $("button").click(function(){

    for(var i = 0; i < 3; i++)


   $(allCameras[0].theSelector).fadeOut().fadeIn();

  });


});

function moveSquare()
{
   for (var i = 0; i < 3; i)
   $("#square").animate({left:750}).animate({top:400}).animate({left:0}).animate({top:300});
}
