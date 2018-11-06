let hourArc;
let minArc;
let secArc;

function setup() {
  createCanvas(400, 400);
  hourArc = hour();
  minArc = minute();
  secArc = second();
	
	//frameRate(1);
	
  angleMode(DEGREES);	
	
}

function draw() {
	hourArc = hour();
	minArc = minute();
	secArc = second();
	
	secArc = map(secArc,0,60,-90,270);
	minArc = map(minArc,0,60,-90,270);
	hourArc = map(hourArc,0,12,-90,270);
	
	var sangle = secArc + 90;
	secX = sin(sangle);
	secY = -cos(sangle);
	
	var mangle = minArc + 90;
	minX = sin(mangle);
	minY = -cos(mangle);
	
	var hangle = hourArc + 90;
	hourX = sin(hangle);
	hourY = -cos(hangle);
	
  background(220);
	
	strokeWeight(5);
	noFill();

	// hour arc
	stroke(0,0,255);
	arc(width/2, height/2, 200, 200, -90, hourArc);
	line(width/2, height/2, (width/2)+100*hourX, (height/2)+100*hourY);

	// min arc
	stroke(0,255,0);
	arc(width/2, height/2, 180, 180, -90, minArc);
	line(width/2, height/2, (width/2)+90*minX, (height/2)+90*minY);

	// sec arc
	stroke(255,0,0);
	arc(width/2, height/2, 160, 160, -90, secArc);
	line(width/2, height/2, (width/2)+80*secX, (height/2)+80*secY);

	//console.log(hourArc);

}
