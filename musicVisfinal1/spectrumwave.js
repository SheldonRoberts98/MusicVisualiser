//first visual option uses the spectrum blocks and a waveform on top#

//----- change name to fix the conventions-----------
function Spectrumwave(){  
  this.name = "spectrumwave";
  //grabs the fft and PeakDetect from the p5 library
  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect();

  this.draw = function(){
      // creates a variable called spectrum and sets it 
      var spectrum = fft.analyze();
      peakDetect.update(fft);


    //changes background colour to dark grey
    background(50,50,50);
    //creates a black oultine for each rectangle
      stroke(255);
      strokeWeight(1);

      //uses the result of the
      for (var i = 0; i< spectrum.length; i+=10){
          var x = map(i, 0, spectrum.length, 0, width);
          var h = -height + map(spectrum[i], 0, 255, height, 0);
          //sets colour of the bar depending on the spectrum result (green to red in ascending order)
          fill(spectrum[i],255-spectrum[i],0);
          rect(x, height, (width / spectrum.length) * 10, h )
      }

      //creates a variable called waveform and sets it to the fft waveform value
      var waveform = fft.waveform();
      noFill();
      beginShape();
      //sets the waveform to red with a weight of 4
      stroke(255,0,0); 
      strokeWeight(4);
      //sets the x and y points using the fft waveform and creates vertexes for the line with them
      for (var i = 0; i< waveform.length; i+=10){
          var x = map(i, 0, waveform.length, 0, width);
          var y = map( waveform[i]/10, -1, 1, 0, height);
          vertex(x,y);
      }
      //ends the line
      endShape();
}
}
