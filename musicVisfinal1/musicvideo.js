//constructor function to create the music video visual
function musicVideo(){
	//name of the visualisation
    this.name = "musicvideo";
    var volHistory = [];
 
    
 
    
    this.draw = function(){

    
        image(video,windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);
        
        fill(255);
        textSize(30);
        text('Press T for "Timeline, R for "Radial"',windowWidth/2 ,50);

        angleMode(DEGREES);
        //radial graph to accompany the video - will be toggleable
        var vol =amp.getLevel();
        volHistory.push(vol);

        noFill();
        stroke(255,0,0);
        strokeWeight(5);
        push();


       
        if(keyCode==84){
            beginShape();
            for(var i = 0; i < volHistory.length; i ++){
                radius = map(volHistory[i],0,1,height,0);
   
                vertex(i, radius);
            }
            endShape();

            //once the visual reaches almost the end of the screen, splice is used to move it across and continue
            if (volHistory.length > windowWidth - 200) {
                volHistory.splice(0, 1);
            }

        }
        

        else if(keyCode==82) {
            translate(width/2,height/2)
            beginShape();   
            for (var i = 0; i < 360; i++) {
                var r = map(volHistory[i], 0, 1, 300, 800);
                var x = r * cos(i);
                var y = r * sin(i);
                vertex(x, y);
            }
            endShape();
            
            if (volHistory.length > 360) {
                volHistory.splice(0, 1);
            }
         
        


        }
        pop();
    
    }
}