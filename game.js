const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let score = 0;

const player = {
x:100,
y:390,
w:40,
h:80,
speed:6
};

const hoop = {
x:700,
y:120,
r:30
};

const ball = {
x:120,
y:390,
r:10,
dx:0,
dy:0,
move:false
};

document.addEventListener("keydown",function(e){

if(e.key==="ArrowLeft"){
player.x-=player.speed;
}

if(e.key==="ArrowRight"){
player.x+=player.speed;
}

if(e.key===" "){

if(!ball.move){

ball.move=true;
ball.x=player.x+20;
ball.y=player.y;
ball.dx=8;
ball.dy=-10;

}

}

});

function update(){

ctx.clearRect(0,0,800,500);

ctx.fillStyle="#4CAF50";
ctx.fillRect(0,0,800,500);

ctx.fillStyle="blue";
ctx.fillRect(player.x,player.y,player.w,player.h);

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(hoop.x,hoop.y,hoop.r,0,Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="orange";
ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
ctx.fill();

if(ball.move){

ball.x+=ball.dx;
ball.y+=ball.dy;

ball.dy+=0.3;

if(ball.y>500){

ball.move=false;
ball.x=player.x+20;
ball.y=player.y;

}

let d=Math.sqrt(
(ball.x-hoop.x)*(ball.x-hoop.x)+
(ball.y-hoop.y)*(ball.y-hoop.y)
);

if(d<20){

score++;
document.getElementById("point").innerHTML=score;

ball.move=false;
ball.x=player.x+20;
ball.y=player.y;

}

}else{

ball.x=player.x+20;
ball.y=player.y;

}

requestAnimationFrame(update);

}

update();
