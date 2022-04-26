//Importar módulos
//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies
//const Body = Matter.Body

//Variáveis
var engine, world;
var ball;
var flor;
var ball2;
var retangulo;


function setup() {
    createCanvas(400,400);

    //Criar Motor de física e renomear o mundo gerado com ele
    engine = Matter.Engine.create();
    world = engine.world;

    var ball_options = {
        restitution: 1,
        frictionAir: 0.000000001,
        isStatic: false
    }

    var ball2_options = {
        restitution: 0.01,
        frictionAir: 1,
        isStatic: false
    }

    var flor_options = {
        isStatic: true
    }

    var retangulo_options = {
        restitution: 1,
        frictionAir: 0.9,
        isStatic: false

    }
    
    //Criar objeto bola
    ball = Matter.Bodies.circle(100,10,20, ball_options);

    ball2 = Matter.Bodies.circle (300,210,30,ball2_options);
 
    flor = Matter.Bodies.rectangle (200,390,400,20,flor_options);

    retangulo = Matter.Bodies.rectangle (100,300,100,35,retangulo_options);

    Matter.World.add(world,ball);
    Matter.World.add (world,flor);
    Matter.World.add(world,ball2);
    Matter.World.add (world,retangulo);

    console.log(ball);
    console.log (retangulo);
    
}

function draw() {
    background(0);

    //Atualizar motor de física
    Matter.Engine.update(engine);  

    //Criar representação da bola na tela
    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

    fill ("brown");
    rectMode(CENTER);
    rect (flor.position.x,flor.position.y,400,20);

    fill ("green");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,30);

    fill ("blue");
    rectMode (CENTER);
    rect(retangulo.position.x,retangulo.position.y,100,35);
    
}

