let hourArc;
let minArc;
let secArc;

let hourText;
let minText;
let secText;

let timeText;

function setup() {
  createCanvas(400, 400);
  hourArc = hour();
  minArc = minute();
  secArc = second();
	
	if(hourArc < 10) { hourText = "0" + hourArc; }
	else { hourText = hourArc; }
	if(minArc < 10) { minText = "0" + minArc; }
	else { minText = minArc; }
	if(secArc < 10) { secText = "0" + secArc; }
	else { secText = secArc; }
	timeText = hourText + ":" + minText + ":" + secText;
	
	//frameRate(1);
	
  angleMode(DEGREES);	
}

function draw() {
	background(220);
	
	hourArc = hour();
	minArc = minute();
	secArc = second();
	
	if(hourArc < 10) { hourText = "0" + hourArc; }
	else { hourText = hourArc; }
	if(minArc < 10) { minText = "0" + minArc; }
	else { minText = minArc; }
	if(secArc < 10) { secText = "0" + secArc; }
	else { secText = secArc; }
	timeText = hourText + ":" + minText + ":" + secText;
	
	secArc = map(secArc,0,60,-90,270);
	minArc = map(minArc,0,60,-90,270);
	hourArc = map(hourArc,0,12,0,360);
	hourArc = map(hourArc,0,360,-90,270);
	
	var sangle = secArc + 90;
	secX = sin(sangle);
	secY = -cos(sangle);
	
	var mangle = minArc + 90;
	minX = sin(mangle);
	minY = -cos(mangle);
	
	var hangle = hourArc + 90;
	hourX = sin(hangle);
	hourY = -cos(hangle);
	
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
	line(width/2, height/2, ((width/2)+80*secX), ((height/2)+80*secY));
	
	strokeWeight(4);
	fill(255);
	stroke(0);
	textSize(32);
	text(timeText,width/2-65,height/2+10);
}
