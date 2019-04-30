script.js
<html>
    <head>
        <title>Accessing the DOM</title>

    </head>
    <body>
        <div id="question">Left or Right</div>

        <script>
        function getChoice1()
        {
            var userChoice = document.getElementById("choice").value;
            var userQuestion = document.getElementById("question");
            if(userChoice === "Left")

            {
              userQuestion.innerHTML = "Left was a good way to go"
            }
         else if(userChoice ==="Right")

         {
             userQuestion.innerHTML = "Right was the Alien, You are dead. Next time take your time."

         }
     else
     {

       userQuestion.innerHTML = " Cant wait here all day. Must make a Choice."
     }

        }
        </script>
    </body>
</html>
