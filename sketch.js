var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(100, 100,10,10);
    ball.shapeColor = "red";

    db = firebase.database();
    ballPosition = db.ref("ball");

    ballPosition.on("value",readposition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();

}

function changePosition(x,y){
    
      ballPosition.set({

        'x' : pos.x + x,
        'y' : pos.y + y

      });

}

function readposition(data) {

pos = data.val();

ball.x = pos.x
ball.y = pos.y

}
