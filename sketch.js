var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref("ball/position");
    ballposition.on("value",readop);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
   database.ref("ball/position").set({
       x:position.x+x,
       y:position.y+y
   })
}

function readop(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;


}
