//visualition that transforms the shapes based on the amplitude of the song

//creates the constructor function for this visualisations
function Shapes(){  
    this.name = "shapes";
    var xPos = 0;
    var yPos = 0;

    this.draw = function(){
        //creates a variable called vol which uses the amp variable I created in sketch.js to get the volume level
        var vol = amp.getLevel()
        //sets the base sizing for the ellipse, the position will not go under this size
        var sizing = map(vol,0,0.4,60,150);
        if (mouseButton == LEFT){
            //if the left mouse button is clicked, the shaped will be a red colour
            stroke(255,0,0)
            fill(255,0,0);
            ellipse(width/2, height/2, sizing , sizing);
        }
        else if (mouseButton == RIGHT){
            //if the right mouse button is clicked, the visualisation changes to green
            stroke(0,255,0)
            fill(0,255,0)
           
            ellipse(width/2, height/2, sizing , sizing);
    
        }

        //background shapes

        noFill()

   
        // xPos = xPos + 2
        // // yPos = yPos + 2 
        // for (var i = 0;i<8;i++){
        //     ellipse(xPos + [i] * 150,yPos +[i]*150,sizing,sizing);
        //     if(xPos > width){
        //         xPos = xPos -2
        //     }
        // }



    
    }

        

}