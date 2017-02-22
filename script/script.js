  function preload(){
  font = loadFont("assets/lato.ttf");
}
function setup() {

  }



function draw() {
var can =createCanvas(1800,500);
  can.parent('aniBox');
  textSize(200);
  fill(255);
   strokeWeight(4);
    var fontpoints = font.textToPoints('Aniket965',250,200);
  for(var i =0 ;i < fontpoints.length;i++){
   stroke(mouseX/200,random(0,255),mouseY);
   strokeWeight(2);
   ellipse(fontpoints[i].x,fontpoints[i].y,random(1,9),random(1,9));
   rect(fontpoints[i].x,fontpoints[i].y,random(1,2),random(1,2));
 }
}


