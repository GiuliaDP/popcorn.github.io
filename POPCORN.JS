
var velocityX = 500;
var velocityY =500;
var positionX = 500;
var positionY= 500;
var ball = document.getElementById('ball');
var reverse = false;

function moveBall() {
    var Xmin = 400;
    var Xmax = 600;
if (reverse == false) {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + 'px';
    ball.style.left = positionY + 'px';
} else {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 'px';
    ball.style.left = positionY + 'px';
}
if (positionX > Xmax && positionY > Ymax) || (positionX == Xmin && positionY == Ymin) {
    !=reverse;
}
}

setInterval(moveBall, 200);