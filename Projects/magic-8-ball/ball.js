// Canvas:
const canvas = document.getElementById("ball-canvas");
const ctx = canvas.getContext("2d");
var canvasW = canvas.width;
var canvasH = canvas.height;
ctx.fillStyle = "#afafaf";  // #707070 original
ctx.fillRect(0, 0, canvasW, canvasH);

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.stroke();
