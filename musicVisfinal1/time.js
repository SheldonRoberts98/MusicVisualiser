function Time(){  
    this.name = "time";

  
    this.draw = function(){
        var currentHour = hour();
        var currentMinute = minute();
        var currentSecond = second();
        var currentDay = day();
        var currentMonth= month();
        var currentYear = year();
        //displays the time in the centre of the screen
        fill(255,0,0);
        textSize(100);
        text(currentHour+':'+currentMinute+':'+currentSecond, windowWidth/2,windowHeight/2);
    // this.keyPressed() =function(){}
        if(keyCode==LEFT_ARROW)
        {
            //if the left arrow key is pressed, the UK date format is displayed
            fill(255);
            textSize(30);
            //plus 40 is added to the windowHeight y value so that it appears slightly below the time
            text(currentDay+'/'+currentMonth+'/'+currentYear,windowWidth/2,windowHeight/2 +40);

        }
        else if(keyCode==RIGHT_ARROW){
            //if the right arrow key is pressed, the US date format is displayed
            fill(255);
            textSize(30);
            text(currentMonth+'/'+currentDay+'/'+currentYear,windowWidth/2,windowHeight/2 +40)

        }
        else{
            //displays hint message until the directional key is pressed
            fill(255);
            textSize(30);
            text('Press the left/right keys to display the date in UK/US format respectively',0,windowHeight-50)

        }

        // fill(255);
        // textSize(30);
        // var ukDate = text(currentDay+'/'+currentMonth+'/'+currentYear,windowWidth/2,windowHeight/2 +40);
        // var usDate = text(currentMonth+'/'+currentDay+'/'+currentYear,windowWidth/2,windowHeight/2 +40);
    }
}