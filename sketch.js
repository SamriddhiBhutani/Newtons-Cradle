const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    canvas = createCanvas (1000,600);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Pendulum(100,500,"red");
    bob2 = new Pendulum(200,500,"orange");
    bob3 = new Pendulum(300,500,"yellow");
    bob4 = new Pendulum(400,500,"lime");
    bob5 = new Pendulum(500,500,"green");
    bob6 = new Pendulum(600,500,"turquoise");
    bob7 = new Pendulum(700,500,"blue");
    bob8 = new Pendulum(800,500,"indigo");
    bob9 = new Pendulum(900,500,"purple");

    sling1 = new Sling(bob1, {x:100,y:100})
    sling2 = new Sling(bob2, {x:200,y:100})
    sling3 = new Sling(bob3, {x:300,y:100})
    sling4 = new Sling(bob4, {x:400,y:100})
    sling5 = new Sling(bob5, {x:500,y:100})
    sling6 = new Sling(bob6, {x:600,y:100})
    sling7 = new Sling(bob7, {x:700,y:100})
    sling8 = new Sling(bob8, {x:800,y:100})
    sling9 = new Sling(bob9, {x:900,y:100})

}

function draw(){
    background(0)
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    bob6.display();
    bob7.display();
    bob8.display();
    bob9.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    sling6.display();
    sling7.display();
    sling8.display();
    sling9.display();
    
}

function mouseDragged(){
   Matter.Body.setPosition(bob1.body,{x: mouseX, y:mouseY})
}