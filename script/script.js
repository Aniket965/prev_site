  function preload(){
  font = loadFont("assets/lato.ttf");
}
function setup() {
 
 
  }



function draw() {
  createCanvas(1200,500);
  background(255);
   textSize(200);
    fill(255);
   strokeWeight(4);
    var fontpoints = font.textToPoints('Aniket965',200,200);
  for(var i =0 ;i < fontpoints.length;i++){
   stroke(mouseX,random(0,255),mouseY);
   console.log('hi');
   strokeWeight(2);
   ellipse(fontpoints[i].x,fontpoints[i].y,random(1,9),random(1,9));
   rect(fontpoints[i].x,fontpoints[i].y,random(1,2),random(1,2));
 }
}


