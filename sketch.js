canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
engine = Engine.create();
world = engine.world;

function setup(){

let canvasmouse = mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();

let options = {
	mouse: canvasmouse
};

 pendulum1 = new Pendulum(100, 250, 100, 100);
 pendulum2 = new Pendulum(200, 250, 100, 100);
 pendulum3 = new Pendulum(300, 250, 100, 100);
 pendulum4 = new Pendulum(400, 250, 100, 100);
 pendulum5 = new Pendulum(500, 250, 100, 100);

 sling1 = new Sling(100, 50, 5, 200);
 sling2 = new Sling(200, 50, 5, 200);
 sling3 = new Sling(300, 50, 5, 200);
 sling4 = new Sling(400, 50, 5, 200);
 sling5 = new Sling(500, 50, 5, 200);


mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint);
}

function draw(){
	background(255);
	 Engine.update(engine);
	 
	 pendulum1.display();
	 pendulum2.display();
	 pendulum3.display();
	 pendulum4.display();
	 pendulum5.display();

	 sling1.display();
	 sling2.display();
	 sling3.display();
	 sling4.display();
	 sling5.display();
	

}


function mouseDragged(){
	Matter.body.setPositon(pendulum1.body({ x: mouseX, y: mouseY });
}