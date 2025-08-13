
function setup(){
    // Ball canvas:
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var canvasW = canvas.width;
    var canvasH = canvas.height;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    // // Text canvas:
    // var textCanvas = document.getElementById("textCanvas");
    // var ctxT = textCanvas.getContext("2d");
    // var ctxTw = textCanvas.width;
    // var ctxTh = textCanvas.height;
    // var ctxTx = textCanvas.width / 2;
    // var ctxTy = textCanvas.height / 2;

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

    // Text
    const answerList = [
        "lol no",
        "ask again",
        "let me think about it",
        "sure, i guess",
        "fine.",
        "maybe",
        "idk",
        "try later",
        "???",
        "what",
        "nope",
        "nahhh",
        "suuuuure"
    ];

    showTextButton.addEventListener('click', () => {
        // Select text from list:
        const randomIndex = Math.floor(Math.random() * answerList.length);
        const randomAnswer = answerList[randomIndex];

        // Re-draw triangle:
        ctx.beginPath();
        ctx.moveTo(500,100);
        ctx.lineTo(740,400);
        ctx.lineTo(260,400);
        ctx.lineTo(500,100);
        ctx.fillStyle = "#19051eff";
        ctx.fill();
        ctx.stroke();

        setTimeout(() => {  
            // Add text:
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(randomAnswer, centerX, 320);
        }, 1000);   // delay text         
    });

}



// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', setup);
// Run a loop every 2 seconds:
// setInterval(loop, 3000);