//importar elementos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//la b va en mayuscula
const Body = Matter.Body;

//variable de boton
var btn1;

//variable angulo
var angle = 60;

//variables fan


function setup() {
    createCanvas(400,400);
    //crear motor y mundo
   engine = Engine.create();
   //la e va en miniscula
   world = engine.world;

    //crear propiedades de la pelota
   var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
   }
    
    //crear propiedades del suelo*
   
    var ground_options = {
      isStatic: true
    }

     //crear boton de imagen 
    btn1 = createImg('up.png')
    btn1.position(20, 30)
    btn1.size(50, 50)
    btn1.mouseClicked(vForce)

    //crear cuchilla giratoria
   
    //crear suelo *
    //ground = Bodies.rectangle(80, 400, 400, 20, ground_options)

    //ground1 = Bodies.rectangle(100, 300, 100, 20, ground_options)
    //World.add(world, ground1)
    
    //añadir el suelo al mundo*
    // World.add(world, ground)

    //crear fan
    

    //crear la pelota
    ball = Bodies.circle(100, 10, 20, ball_options)
    //añadirla al mundo
    World.add(world,ball);

   

    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() 
{
  background("pink")
  //actualizar motor
  Engine.update(engine)
   
 /* Matter.Body.rotate(ground1,angle)
  push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  */
 // angle +=0.1;

  
  //crear figura de la pelota
  ellipse(ball.position.x, ball.position.y, 20);
  
  //figura del suelo
  //rect(ground.position.x, ground.position.y, 400, 20)
}

//funcion v force
function vForce(){
  Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 0, y: -0.05})
}