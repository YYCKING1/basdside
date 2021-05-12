canvas = document.getElementById('myCanvas'); 

ctx = canvas.getContext("2d"); 

rover_width = 100; 
rover_width2 = 100;
rover_height = 90; 
rover_height2 = 90; 



var Random_number = Math.floor(Math.random()*4);

background_image = "the2.jpg";
rover_image = "th.png"; 
rover_image2 = "th2.png";
rover_x = 10; 
rover_x2 = 10;
rover_y = 10; 
rover_y2 = 10; 
function add() 

{ background_imgTag = new Image();

  background_imgTag.onload = uploadBackground; 

  background_imgTag.src = background_image; 

  rover_imgTag = new Image();

  rover_imgTag.onload = uploadrover;

  rover_imgTag.src = rover_image;

  rover2_imgTag = new Image();

  rover2_imgTag.onload = uploadrover;

  rove2r_imgTag.src = rover_image2;
}
function uploadBackground() 

 { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

 } function uploadrover()
  { 
     ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
    }

    window.addEventListener("keydown", my_keydown); 

    function my_keydown(e) 

    { keyPressed = e.keyCode; 
        
        console.log(keyPressed); 

        if(keyPressed == '38')

         { up(); console.log("up"); 

        } 
        if(keyPressed == '40') 

        { down(); console.log("down"); 

    } 
    if(keyPressed == '37') { 
      left(); 

        console.log("left"); } 

        if(keyPressed == '39') 

        { right(); console.log("right"); } 
      
      }

      function up()
       
      {
       if (rover_y > 0)
       {
        rover_y = rover_y - 10;
        console.log("When up button is pressed x="+rover_x + ",y="+rover_y);
        uploadBackground();
        uploadrover();
       }
      }


      function down()
       
      {
       if (rover_y < 500)
       {
        rover_y = rover_y + 10;
        console.log("When down button is pressed x="+rover_x + ",y="+rover_y);
        uploadBackground();
        uploadrover();
       }
      }


      function left()
       
      {
       if (rover_x > 0)
       {
        rover_x = rover_x - 10;
        console.log("When left button is pressed x="+rover_x + ",y="+rover_y);
        uploadBackground();
        uploadrover();
       }
      }

      function right()
       
      {
       if (rover_x < 700)
       {
        rover_x = rover_x + 10;
        console.log("When right button is pressed x="+rover_x + ",y="+rover_y);
        uploadBackground();
        uploadrover();
       }
      }