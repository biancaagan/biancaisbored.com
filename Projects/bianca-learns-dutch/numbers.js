async function loadFonts() {
    const font1 = new FontFace('CustomFont1', 'url(Fonts/IBM_Plex_Mono/IBMPlexMono-SemiBold.ttf)');
    const font2 = new FontFace('CustomFont2', 'url(Fonts/IBM_Plex_Mono/IBMPlexMono-Bold.ttf)');

    await Promise.all([font1.load(), font2.load()]);
    document.fonts.add(font1);
    document.fonts.add(font2);

    setup();

}

function setup(){

    let randomNum;
    let dutchNum;

    // Number canvas:
    var canvas = document.getElementById("numbersCanvas");
    var ctx = canvas.getContext("2d");
    var canvasW = canvas.width;
    var canvasH = canvas.height;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Answer canvas:
    var answerCanvas = document.getElementById("answerCanvas");
    var answerCtx = answerCanvas.getContext("2d");
    var answerCanvasW = answerCanvas.width;
    var answerCanvasH = answerCanvas.height;
    var answerCenterX = answerCanvas.width / 2;
    var answerCenterY = answerCanvas.height / 2;

    // First time on setup:
    // Clear canvases:
    ctx.clearRect(0, 0, canvasW, canvasH);
    answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

    randomNum = Math.floor(Math.random() * 100) + 1;

    // Add number rectangle:
    const rectW = 170;
    const rectH = 120;
    ctx.beginPath();
    ctx.fillStyle = "none";
    ctx.roundRect((centerX - rectW/2), (centerY - rectH/2), rectW, rectH, 8);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Add number:
    ctx.font = "80px CustomFont2";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(randomNum, centerX, 76);



    refreshButton.addEventListener('click', () => {
        // Clear canvas:
        ctx.clearRect(0, 0, canvasW, canvasH);
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

        // Add number rectangle:
        const rectW = 170;
        const rectH = 120;
        ctx.beginPath();
        ctx.fillStyle = "none";
        ctx.roundRect((centerX - rectW/2), (centerY - rectH/2), rectW, rectH, 8);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.stroke();

        randomNum = Math.floor(Math.random() * 100) + 1;

        dutchNum = getDutchNumber(randomNum);
        
        // Add number:
        ctx.font = "80px CustomFont2";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(randomNum, centerX, 76);
    
    });
    
   
    answerButton.addEventListener('click', () => {
        // Clear answer canvas:
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

        dutchNum = getDutchNumber(randomNum);

        console.log(dutchNum);

        // Get answer value:
        const answerBox = document.getElementById('answerTextArea');
        const userAnswer = answerBox.value;

        let userResults;
        if(userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')
            === dutchNum.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')){
                
                userResults = "Correct!";

                // Add results:
                answerCtx.font = "40px CustomFont2";
                answerCtx.fillStyle = "black";
                answerCtx.textAlign = "center";
                answerCtx.textBaseline = "middle";
                answerCtx.fillText(userResults, answerCenterX, 60);

                // Clear text area:
                answerBox.value = '';
        }
        else {
            userResults = "Wrong.";
            
            // Add results:
            answerCtx.font = "40px CustomFont2";
            answerCtx.fillStyle = "black";
            answerCtx.textAlign = "center";
            answerCtx.textBaseline = "middle";
            answerCtx.fillText(userResults, answerCenterX, 40);
            answerCtx.font = "20px CustomFont2";
            answerCtx.fillStyle = "rgb(134, 54, 54)";
            answerCtx.fillText(dutchNum, answerCenterX, 80);
        }

        console.log(userResults);

    });

}

function getDutchNumber(num) {
    const dutchNumbers = [
    "nul", "één", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien",
    "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien", "twintig",
    "eenentwintig", "tweeëntwintig", "drieëntwintig", "vierentwintig", "vijfentwintig", "zesentwintig", "zevenentwintig", "achtentwintig", "negenentwintig", "dertig",
    "eenendertig", "tweeëndertig", "drieëndertig", "vierendertig", "vijfendertig", "zesendertig", "zevenendertig", "achtendertig", "negenendertig", "veertig",
    "eenenveertig", "tweeënveertig", "drieënveertig", "vierenveertig", "vijfenveertig", "zesenveertig", "zevenveertig", "achtenveertig", "negenveertig", "vijftig",
    "eenenvijftig", "tweeënvijftig", "drieënvijftig", "vierenvijftig", "vijfenvijftig", "zesenvijftig", "zevenvijftig", "achtenvijftig", "negenenvijftig", "zestig",
    "eenenzestig", "tweeënzestig", "drieënzestig", "vierenzestig", "vijfenzestig", "zesenzestig", "zevenzestig", "achtenzestig", "negenenzestig", "zeventig",
    "eenenzeventig", "tweeënzeventig", "drieënzeventig", "vierenzestig", "vijfenzeventig", "zesenzeventig", "zevenenzeventig", "achtenzeventig", "negenenzeventig", "tachtig",
    "eenentachtig", "tweeëntachtig", "drieëntachtig", "vierentachtig", "vijfentachtig", "zesentachtig", "zevenentachtig", "achtentachtig", "negenentachtig", "negentig",
    "eenennegentig", "tweeënnegentig", "drieënnegentig", "vierennegtig", "vijfennegentig", "zesennegentig", "zevenennegentig", "achtennegentig", "negenennegentig", "honderd"
];

    return dutchNumbers[num];
}


// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', loadFonts);
// Run a loop every 2 seconds:
// setInterval(loop, 3000);