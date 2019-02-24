// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4","image5","image6","image7","image8","image9","image10"];
// create a variable with the blank image name
var blankImagePath = "images/Cat.jpg";
// create a empty array for the actual images
var firstNumber = -1;
var secondNumber = -1;
var player = {"firstname":"", "lastname":"Ages"};

var actualImages = new Array();

function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["images/Cat1.jpg", "images/Cat2.jpg", "images/Cat3.jpg", "images/Cat5.jpg", "images/Cat6.png"];

    // create another array to make sure the images only get added twice
    var count = [0, 0, 0, 0, 0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 10)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{

  //make second img appear
    if(firstNumber >= 0)
    {
       secondNumber = number;
       document.getElementById(imageTags[number]).src =  actualImages[secondNumber];

    }
    else if(firstNumber < 0)
    {
      firstNumber= number;
      document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    }

      if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
    {

      setTimeout(imagesDisappear, 3000);
    }
      else if (actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
      {
        firstNumber = -1;
        secondNumber = -1;
      }

        // this should be a quick function that just changes
        // the image based on what number was pressed


}
function imagesDisappear()
{


document.getElementById(imageTags[firstNumber]).src = blankImagePath;
document.getElementById(imageTags[secondNumber]).src = blankImagePath;
firstNumber = -1;
secondNumber = -1;

}

function addToPlayer()
{
  var firstname = document.getElementById("txtFirstName").value;
  player.firstname = firstname;
  localStorage.setItem("Playerinfo", JSON.stringify(player));
  window.location = "HW.html";
  var lastname = document.getElementById("txtLastName").value;
  player.lastname = lastname;
  localStorage.setItem("playerinfo", JSON.stringify(player))
  window.location = "HW.html";
  var lastname = document.getElementById("txtAge").value;
  player.age = age;
  localStorage.setItem("playerinfo", JSON.stringify(player))
  window.location = "HW.html";
}

function playerInfo()
{
var playerInformation = localStorage.getItem("playerInfo");
player = JSON.parse(playerInformation);

}
