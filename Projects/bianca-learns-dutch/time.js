async function loadFonts() {
    const font1 = new FontFace('CustomFont1', 'url(Fonts/IBM_Plex_Mono/IBMPlexMono-SemiBold.ttf)');
    const font2 = new FontFace('CustomFont2', 'url(Fonts/IBM_Plex_Mono/IBMPlexMono-Bold.ttf)');

    await Promise.all([font1.load(), font2.load()]);
    document.fonts.add(font1);
    document.fonts.add(font2);

    setup();

}

function setup(){

    let randomTime = "";
    let randomHour;
    let randomMin;

    // Time canvas:
    var timeCanvas = document.getElementById("timeCanvas");
    var timeCtx = timeCanvas.getContext("2d");
    var timeCanvasW = timeCanvas.width;
    var timeCanvasH = timeCanvas.height;
    var timeCenterX = timeCanvas.width / 2;
    var timeCenterY = timeCanvas.height / 2;

    // Answer canvas:
    var answerCanvas = document.getElementById("answerCanvas");
    var answerCtx = answerCanvas.getContext("2d");
    var answerCanvasW = answerCanvas.width;
    var answerCanvasH = answerCanvas.height;
    var answerCenterX = answerCanvas.width / 2;
    var answerCenterY = answerCanvas.height / 2;

    // First time on setup:
    // Clear canvases:
    timeCtx.clearRect(0, 0, timeCanvasW, timeCanvasH);
    answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);


    randomTime = "";
    randomHour = Math.floor(Math.random() * 12) + 1;
    randomMin = Math.floor(Math.random() * 12) * 5;

    if(randomMin == 0) {
        randomTime = randomHour + ":" + randomMin + "0";
        // console.log(randomTime);
    } else if(randomMin == 5) {
        randomTime = randomHour + ":0" + randomMin;
        // console.log(randomTime);
    } else {
        randomTime = randomHour + ":" + randomMin;
        // console.log(randomTime);
    }

    // Add text:
    timeCtx.font = "80px CustomFont2";
    timeCtx.fillStyle = "black";
    timeCtx.textAlign = "center";
    timeCtx.textBaseline = "middle";
    timeCtx.fillText(randomTime, timeCenterX, 58);


    refreshButton.addEventListener('click', () => {
        // Clear canvas:
        timeCtx.clearRect(0, 0, timeCanvasW, timeCanvasH);
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);
        
        // Random time:
        randomTime = "";
        randomHour = Math.floor(Math.random() * 12) + 1;
        randomMin = Math.floor(Math.random() * 12) * 5;

        if(randomMin == 0) {
            randomTime = randomHour + ":" + randomMin + "0";
            // console.log(randomTime);
        } else if(randomMin == 5) {
            randomTime = randomHour + ":0" + randomMin;
            // console.log(randomTime);
        } else {
            randomTime = randomHour + ":" + randomMin;
            // console.log(randomTime);
        }

        // Add text:
        timeCtx.font = "80px CustomFont2";
        timeCtx.fillStyle = "black";
        timeCtx.textAlign = "center";
        timeCtx.textBaseline = "middle";
        timeCtx.fillText(randomTime, timeCenterX, 58);

    });
    
   
    answerButton.addEventListener('click', () => {
        // Clear answer canvas:
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

        let dutchHour = getDutchHour(randomHour);
        let dutchMin = getDutchMinute(randomMin);
        let dutchTime;

        // console.log(randomHour);

        // Get answer value:
        const answerBox = document.getElementById('answerTextArea');
        const userAnswer = answerBox.value;


        if(randomMin == 0){     // For the hours
            dutchTime = "Het is " + dutchHour + " uur";
        } 
        else if(randomMin == 15){       // For quarter past
            dutchTime = "Het is kwart na " + dutchHour;
        } 
        else if(randomMin == 45){       // For quarter before
            randomHour = (randomHour % 12) + 1;
            dutchTime = "Het is kwart voor " + getDutchHour(randomHour);
        }
        else if(randomMin == 30){        // For half hour
            randomHour = (randomHour % 12) + 1;
            dutchTime = "Het is half " + getDutchHour(randomHour);
        }
        else if(1 < randomMin && randomMin < 30){        // Between hour and the next half
            dutchTime = "Het is " + dutchMin + " na " + dutchHour;
        }
        else if(30 < randomMin && randomMin <= 59){      // Between half hour and next hour
            randomMin = 60 - randomMin;
            randomHour = (randomHour % 12) + 1;
            dutchTime = "Het is " + getDutchMinute(randomMin) + " voor " + getDutchHour(randomHour);
        }

        // Compare users answer:
        let userResults;
        if(userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')
            === dutchTime.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')){
            userResults = "Correct!";
            // console.log(userResults);

            // Add results:
            answerCtx.font = "40px CustomFont2";
            answerCtx.fillStyle = "black";
            answerCtx.textAlign = "center";
            answerCtx.textBaseline = "middle";
            answerCtx.fillText(userResults, answerCenterX, 60);

            // Clear text area:
            answerBox.value = '';
        } 
        else{
            userResults = "Wrong.";
            // console.log(userResults);

            // Add results:
            answerCtx.font = "40px CustomFont2";
            answerCtx.fillStyle = "black";
            answerCtx.textAlign = "center";
            answerCtx.textBaseline = "middle";
            answerCtx.fillText(userResults, answerCenterX, 40);
            answerCtx.font = "20px CustomFont2";
            answerCtx.fillStyle = "rgb(134, 54, 54)";
            answerCtx.fillText(dutchTime, answerCenterX, 80);
        }

        console.log(String(dutchTime));
        console.log(userResults);


    });

}

function getDutchMinute(minute) {
    const dutchMins = [
    "", "één", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien",
    "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien", "twintig",
    "eenentwintig", "tweeëntwintig", "drieëntwintig", "vierentwintig", "vijfentwintig", "zesentwintig", "zevenentwintig", "achtentwintig", "negenentwintig", "dertig",
    "eenendertig", "tweeëndertig", "drieëndertig", "vierendertig", "vijfendertig", "zesendertig", "zevenendertig", "achtendertig", "negenendertig", "veertig",
    "eenenveertig", "tweeënveertig", "drieënveertig", "vierenveertig", "vijfenveertig", "zesenveertig", "zevenveertig", "achtenveertig", "negenveertig", "vijftig",
    "eenenvijftig", "tweeënvijftig", "drieënvijftig", "vierenvijftig", "vijfenvijftig", "zesenvijftig", "zevenvijftig", "achtenvijftig", "negenenvijftig"
    ];

    return dutchMins[minute];
}

function getDutchHour(hour) {
    switch (hour){
        case 1:
            return "één";
        case 2:
            return "twee";
        case 3:
            return  "drie";
        case 4:
            return "vier";
        case 5:
            return "vijf";
        case 6:
            return "zes";
        case 7:
            return "zeven";
        case 8:
            return "acht";
        case 9:
            return "negen";
        case 10:
            return "tien";
        case 11:
            return "elf";
        case 12:
            return "twaalf";
    }
}


// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', loadFonts);
// Run a loop every 2 seconds:
// setInterval(loop, 3000);