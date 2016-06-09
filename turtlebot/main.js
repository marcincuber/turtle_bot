window.onload = function()
{
	x = 0;
	y = 0;
	d = 2;
	speed = 5;
	angle = 0;
	mod = 0;
	coords = [];
	canvas = document.getElementById("canvas");
	space = canvas.getContext("2d");
	turtle = new Image();
    turtle.src="myimage.png";
	
    window.addEventListener("keydown", keypress_handler, false);
    window.addEventListener("keyup", keyup_handler, false);
	
	var move = setInterval(function()
	{
		run();
		
	}, 30);
};

function storeCoordinate(x, y, array) {
    array.push(x);
    array.push(y);
}

function circle(c,s,r) 
{
	space.beginPath();
	space.arc(c, s, r, 0, Math.PI*2, true);
	space.fill();
}

function run()
{
	
	space = canvas.getContext("2d");
	space.clearRect(0, 0, 400, 400);
	x += (speed*mod) * Math.cos(Math.PI/180 * angle);
	y += (speed*mod) * Math.sin(Math.PI/180 * angle);
	for (var i = 0; i < coords.length; i+=2) {
    	var z = coords[i];
   		var w = coords[i+1];
		space.fillRect(z,w,3,3); 
		} 
	space.save();
	space.translate(x, y);
	space.rotate(Math.PI/180 * angle);
	space.drawImage(turtle, -(turtle.width/2), -(turtle.height/2));	
	space.restore();
	storeCoordinate(x, y, coords);
	

}

function keyup_handler(event)
{
	if(event.keyCode == 38 || event.keyCode == 40)
	{
		mod = 0;
	}
}

function keypress_handler(event)
{
	console.log(event.keyCode);
	if(event.keyCode == 38)
	{
		mod = 1;
		
	}
	if(event.keyCode == 40)
	{
		mod = -1;
		
	}
	if(event.keyCode == 37)
	{
		angle -= 5;
		
	}
	if(event.keyCode == 39)
	{
		angle+=5;
	}
}

function clearCanvas () {
  space.clearRect(0, 0, 400, 400);
	x = 0;   
	y = 0;
	angle = 0;
	space.save();
	space.translate(x, y);
	space.rotate(Math.PI/180 * angle);
	space.drawImage(turtle, -(turtle.width/2), -(turtle.height/2));	
	space.restore();
	coords = [];
}