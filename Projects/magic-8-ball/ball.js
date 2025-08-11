
function setup(){
    // Canvas:
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var canvasW = canvas.width;
    var canvasH = canvas.height;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    // ctx.fillStyle = "#afafaf";  // #707070 original
    // ctx.fillRect(0, 0, canvasW, canvasH);

    // Gradients:
    // Outer circle gradient:
    var cirGrad = ctx.createLinearGradient(centerX, centerY, 800, 800);
    cirGrad.addColorStop(0, "#0c0c0cff");
    cirGrad.addColorStop(1, "#2c2c2cff");
    // Triangle outline gradient:
    var triOutlineGrad = ctx.createLinearGradient(0, 0, 280, 0);
    triOutlineGrad.addColorStop(0, "#8a8a8aff");
    triOutlineGrad.addColorStop(1, "#262626ff");
    // Inner circle gradient:
    var innerCirGrad = ctx.createLinearGradient(centerX, centerY, 800, 800);
    innerCirGrad.addColorStop(0, "#000000ff");
    innerCirGrad.addColorStop(1, "#3c3c3cff");

    // Draw circle:
    ctx.beginPath();
    ctx.arc(centerX, centerY, 500, 0, 2 * Math.PI);
    ctx.fillStyle = cirGrad;
    ctx.fill();
    // ctx.lineWidth = 10;
    ctx.strokeStyle = triOutlineGrad;
    // ctx.stroke();

    
    // Draw circle:
    ctx.beginPath();
    ctx.arc(centerX, 340, 280, 0, 2 * Math.PI);
    ctx.fillStyle = innerCirGrad;
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.stroke();

    // Draw triangle:
    ctx.beginPath();
    ctx.moveTo(500,100);
    ctx.lineTo(740,400);
    ctx.lineTo(260,400);
    ctx.lineTo(500,100);
    ctx.fillStyle = "#19051eff";
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = triOutlineGrad;
    ctx.stroke();

    showTextButton.addEventListener('click', () => {
        ctx.font = "50px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("lol no", centerX-80, 300);   
    });
}

// function submitFunction() {
//     // Canvas:
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     var canvasW = canvas.width;
//     var canvasH = canvas.height;
//     var centerX = canvas.width / 2;
//     var centerY = canvas.height / 2;

//     ctx.font = "30px Arial";
//     ctx.fillStyle = "white";
//     ctx.fillText("Hello world", centerX-80, 300);
// }

// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', setup);
// Run a loop every 2 seconds:
// setInterval(loop, 3000);