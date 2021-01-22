/*//string
var name1 = "Sky"
console.log(name1);

//number
var age = 0.3
console.log(age);

//null data
var body = null;
console.log(body);

//boolean - true or false
var cute = true;
console.log(cute);

//undefined
var burrito;
console.log(burrito);

burrito = "chicken"
console.log(burrito);

//array - different values of same datatype or different data types
var marks = [95,"A",99,96,"A+"];
for(var i=0;i<marks.length;i++){
    console.log(marks[i]);
}
marks.push(100);
console.log(marks);

marks.pop();
console.log(marks);

//array with list of arrays
//var position = [200,100]
//var trajectory = [];
//console.log(trajectory)

//trajectory.push(position)
//console.log(trajectory)

//var position = [250,150]
//trajectory.push(position)

var trajectory = [[200,100],[250,150],[300,500]]
for(var i = 0; i<trajectory.length;i++){
    console.log(trajectory[i][0],trajectory[i][1])
}*/





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState === "onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}