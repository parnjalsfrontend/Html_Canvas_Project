let canvas = document.getElementById('clock');
let ctx = canvas.getContext('2d');
const radius = canvas.height/2;
ctx.translate(radius,radius)

// Fucntion to draw the Clock

function drawClock(){
     drawFace(ctx,radius);
     drawNumbers(ctx,radius);
     drawTime(ctx,radius);
}

// Function to draw the face of the clock
function drawFace(ctx,radius){
    let grad;
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95,0 , 0 ,radius * 1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
// Function to draw the numbers on the clock
function drawNumbers(ctx,radius){
    let ang;
    let num;
    ctx.font = radius*0.15 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0,-radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(ang);
        ctx.translate(0,radius*0.85);
        ctx.rotate(-ang);
    }
}
 // Function to Draw the Hands of the Clock
 function drawTime(ctx,radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour%12;
     hour = (hour * Math.PI/6) + (minute * Math/PI/(6*60)) + (second * Math.PI /(360 * 60));
     drawHand(ctx, hour, radius*0.5, radius*0.07);

     // Minute
     minute = (minute * Math.PI/30) + (second * Math/PI / (30 * 60));
     drawHand(ctx, minute, radius*0.7, radius*0.07);

     // Second 
     second = (second * Math.PI/30);
     drawHand(ctx, second, radius*0.9, radius*0.02);
 }

  // Function To Draw Each Hand
  function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  // Update the Clock Per Second
  setInterval(drawClock , 1000);
  drawClock();

