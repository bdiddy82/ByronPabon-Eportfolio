var textY=10;

function setup() {
  // put setup code here
  createCanvas (500,500);
  background (80,150,50);
}

function draw() {
  background(80,150,50);
   fill(255, 0, 0);                         // red elipse   
   noStroke();    
   ellipse(250, 250, 250, 250);
   fill('black');                    //black
   ellipse(300, 200, 20, 20);    //eyes
   ellipse(200, 200, 20, 20); 
   noFill ()  ;
   stroke('black');            // smile no fill
   strokeWeight(5);    
   arc(250, 270, 110, 50,0,PI/1.0);  
   fill('black');
    strokeWeight(1);
   fill(250, 0, 0, 100);           // red fill with transparency
   ellipse(mouseX, mouseY, 50, 50);      //red circle for mouse

                  //text: black stroke
   textSize(20); 
   strokeWeight(0);
   textFont("hevetica");    
   textStyle(ITALIC);    
   textAlign(LEFT);    
   text('Whats Gucci!',200,textY);  
 
   if(textY>500){
      textY=10;
   }else{ 
     textY=textY+5;
   }

  
}
