function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {

  ctx.save();
  var time2 = new Date();
  ctx.translate(time2.getSeconds(), 0);
  //Draw a dot
  ctx.beginPath();
  ctx.arc(0, 0, 20, 0, 2 * Math.PI, false);
  ctx.fill();
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(-190, 120);
  ctx.lineTo(190, 120);
  ctx.lineTo(0, -190);
  ctx.lineTo(-190, 120);
  ctx.stroke();

  //slide the triangle left and right
  ctx.translate(100*Math.sin(time2.getSeconds() + time2.getMilliseconds() / 1000), 0);
//translate (sin of time)

  // ctx.beginPath();
  // ctx.moveTo(-190, -120);
  // ctx.stroke();

//circle (unnecessary)
  // ctx.beginPath();
  // ctx.arc(0, 0, 100, 0, Math.PI * 2, false);
  // ctx.stroke();

//line
  ctx.save();
  var time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.beginPath();
  ctx.moveTo(-200, -280);
  ctx.lineTo(-110, -130);
  ctx.stroke();
  ctx.restore();

  //ellipse
  // Draw the ellipse
ctx.beginPath();
ctx.ellipse(0, 0, 150, 50, Math.PI / 1, 0, 2 * Math.PI);
ctx.stroke();

  //ctx.fillRect(-160, 10, 100, 100);
  ctx.restore();
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
