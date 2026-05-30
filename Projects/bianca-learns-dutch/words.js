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
    let dutchWord;
    let englishWord;
    let selected = 'mode1';

    // Word canvas:
    var canvas = document.getElementById("wordsCanvas");
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


    // Random number, for index of words:
    randomNum = Math.floor(Math.random() * 7) + 1;

    dutchWord = getDutchWord(randomNum);
    englishWord = getEnglishWord(randomNum);


    // Add first word (on page load it starts with Dutch to English):
    ctx.font = "58px CustomFont2";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(dutchWord, centerX, 60);

    // Mode selection form:
    const modeOptions = document.querySelectorAll('input[name="choice"]');

    modeOptions.forEach(radio => {
        radio.addEventListener('change', (event) => {
            selected = event.target.value;
            
            if(selected === 'mode1'){   // Dutch to English
                // Clear canvases:
                ctx.clearRect(0, 0, canvasW, canvasH);
                answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

                // Dutch:
                ctx.font = "60px CustomFont2";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(dutchWord, centerX, 60);

                console.log("Mode selected: mode 1");
            } else if(selected === 'mode2'){    // English to Dutch
                // Clear canvases:
                ctx.clearRect(0, 0, canvasW, canvasH);
                answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

                // English:
                ctx.font = "60px CustomFont2";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(englishWord, centerX, 60);

                console.log("Mode selected: mode 2");
            }
        })
    })



    refreshButton.addEventListener('click', () => {
        // Clear canvas:
        ctx.clearRect(0, 0, canvasW, canvasH);
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

        // Random number, for index of words:
        randomNum = Math.floor(Math.random() * 7) + 1;
        
        dutchWord = getDutchWord(randomNum);
        englishWord = getEnglishWord(randomNum);

        if(selected === 'mode1'){   // Dutch
            // Add word:
            ctx.font = "58px CustomFont2";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(dutchWord, centerX, 60);

        } else if(selected === 'mode2'){    // English
            // Add word:
            ctx.font = "58px CustomFont2";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(englishWord, centerX, 60);
        }     

    
    });
    
   
    answerButton.addEventListener('click', () => {
        // Clear answer canvas:
        answerCtx.clearRect(0, 0, answerCanvasW, answerCanvasH);

        // Get answer value:
        const answerBox = document.getElementById('answerTextArea');
        const userAnswer = answerBox.value;

        let userResults;

        if(selected === 'mode1'){   // Dutch
            // Check English answer:
            if(userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')
            === englishWord.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')){
                
                userResults = "Correct!";

                // Add results:
                answerCtx.font = "40px CustomFont2";
                answerCtx.fillStyle = "black";
                answerCtx.textAlign = "center";
                answerCtx.textBaseline = "middle";
                answerCtx.fillText(userResults, answerCenterX, 60);

                // Clear text area:
                answerBox.value = '';
            } else {
                userResults = "Wrong.";
                
                // Add results:
                answerCtx.font = "40px CustomFont2";
                answerCtx.fillStyle = "black";
                answerCtx.textAlign = "center";
                answerCtx.textBaseline = "middle";
                answerCtx.fillText(userResults, answerCenterX, 40);
                answerCtx.font = "20px CustomFont2";
                answerCtx.fillStyle = "rgb(134, 54, 54)";
                answerCtx.fillText(englishWord, answerCenterX, 80);
            }

        } else if(selected === 'mode2'){    // English
            // Check Dutch answer:
            if(userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')
            === dutchWord.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, '')){
                
                userResults = "Correct!";

                // Add results:
                answerCtx.font = "40px CustomFont2";
                answerCtx.fillStyle = "black";
                answerCtx.textAlign = "center";
                answerCtx.textBaseline = "middle";
                answerCtx.fillText(userResults, answerCenterX, 60);

                // Clear text area:
                answerBox.value = '';
            } else {
                userResults = "Wrong.";
                
                // Add results:
                answerCtx.font = "40px CustomFont2";
                answerCtx.fillStyle = "black";
                answerCtx.textAlign = "center";
                answerCtx.textBaseline = "middle";
                answerCtx.fillText(userResults, answerCenterX, 40);
                answerCtx.font = "20px CustomFont2";
                answerCtx.fillStyle = "rgb(134, 54, 54)";
                answerCtx.fillText(dutchWord, answerCenterX, 80);
            }
        }
    })
    
}

function getDutchWord(randomIndex) {
    const dutchWords = [
        "Hallo", "Alstublieft", "Alsjeblieft", "Dank u", "Dankjewel",
        "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"
    ];

    return dutchWords[randomIndex];
}

function getEnglishWord(randomIndex) {
    const englishWords = [
        "Hello", "Please (formal)", "Please (informal)", "Thank you (formal)", "Thank you (informal)",
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    return englishWords[randomIndex];
}


// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', loadFonts);
// Run a loop every 2 seconds:
// setInterval(loop, 3000);