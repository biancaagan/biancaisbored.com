/*

  Trying to make a google chrome extension
  that has a binary clock for the new tab page

  by Bianca Gan 10/25/23

  with help from:
  https://www.geeksforgeeks.org/how-to-design-digital-clock-using-javascript/#
  https://hackernoon.com/building-a-new-tab-chrome-extension-with-zero-dependencies-5zlh3ue6 

*/

setInterval(binaryTime, 1000);  // calls every second

function binaryTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 hr format:
    if (hour >= 12){
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0){
        hr = 12;
        am_pm = "AM";
    }

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    if(sec == 0){
        updateClock();
    }

    // // Update test div:
    // document.getElementById("test").innerHTML = currentTime;

}

let x1 = 150;
let x2 = 350;
let x3 = 650;
let x4 = 850;

let onColor = '#f78c2c';    // #ff9f0f original
let offColor = '#ffffff';

function setup(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // Setting time for 12 hr format:
    if (hour >= 12){
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0){
        hr = 12;
        am_pm = "AM";
    }

    // Canvas:
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var canvasW = canvas.width;
    var canvasH = canvas.height;
    ctx.fillStyle = "#afafaf";  // #707070 original
    ctx.fillRect(0, 0, canvasW, canvasH);

    let x1 = 150;
    let x2 = 350;
    let x3 = 650;
    let x4 = 850;

    let onColor = '#f78c2c';    // #ff9f0f original
    let offColor = '#ffffff';

    // Initial clock set:
    updateClock();


}



function updateClock() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 hr format:
    if (hour >= 12){
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0){
        hr = 12;
        am_pm = "AM";
    }

    let x1 = 150;
    let x2 = 350;
    let x3 = 650;
    let x4 = 850;

    let onColor = '#f78c2c';    // #ff9f0f original
    let offColor = '#ffffff';

    // Canvas:
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var canvasW = canvas.width;
    var canvasH = canvas.height;

    ctx.clearRect(0, 0, canvasW, canvasH);      // Clear canvas to redraw

    // Middle colon:
    for (let i = canvasW/3; i <= 2*canvasW/3; i += canvasW/3){
        ctx.beginPath();
        ctx.arc(canvasW / 2, i-50, 25, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
    }

    // AM or PM:
    // AM = 41 4D // PM = 50 4D
    if(am_pm == "AM"){
        let amText = "41 4D";
        let pmText = "50 4D";
        ctx.font = "bold 45px Courier New";
        ctx.fillStyle = '#f78c2c';  // #ff9f0f original
        ctx.fillText(amText, canvasW / 2 - ctx.measureText(amText).width - 25, 925)
        ctx.fillStyle = '#ffffff';
        ctx.fillText(pmText, canvasW / 2 + 25, 925)
    } else if(am_pm == "PM"){
        let amText = "41 4D";
        let pmText = "50 4D";
        ctx.font = "bold 45px Courier New";
        ctx.fillStyle = '#ffffff';
        ctx.fillText(amText, canvasW / 2 - ctx.measureText(amText).width - 25, 925)
        ctx.fillStyle = '#f78c2c';  // #ff9f0f original
        
        ctx.fillText(pmText, canvasW / 2 + 25, 925)
    }
    

    // -------------------------------- HOUR --------------------------------
    // If the hour is 10 / 11 / 12 -----------------------------------------
    // First digit is a 1:
    if(hour >= 10){
        // First digit ( 1 ):
        drawOne(x1);

        // Second digit:
        if(hour == 10){
            drawZero(x2);
        } else if(hour == 11){
            drawOne(x2);
        } else if(hour == 12){
            drawTwo(x2);
        }

    }

    // If the hour is 9 or less -----------------------------------------
    // First digit is a 0:
    if(hour < 10) {
        // First digit ( 0 ):
        drawZero(x1);

        // Second digit:
        if(hour == 9){
            drawNine(x2);
        } else if(hour == 8){
            drawEight(x2);
        } else if(hour == 7){
            drawSeven(x2);
        } else if(hour == 6){
            drawSix(x2);
        } else if(hour == 5){
            drawFive(x2);
        } else if(hour == 4){
            drawFour(x2);
        } else if(hour == 3){
            drawThree(x2);
        } else if(hour == 2){
            drawTwo(x2);
        } else if(hour == 1){
            drawOne(x2);
        }


    }

    // -------------------------------- MINUTE --------------------------------
    // If minute is single digit (1-9) -----------------------------------------
    if(min < 10){
        // First digit ( 0 ):
        drawZero(x3);

        // Second digit:
        if(min == 9){
            drawNine(x4);
        } else if(min == 8){
            drawEight(x4);
        } else if(min == 7){
            drawSeven(x4);
        } else if(min == 6){
            drawSix(x4);
        } else if(min == 5){
            drawFive(x4);
        } else if(min == 4){
            drawFour(x4);
        } else if(min == 3){
            drawThree(x4);
        } else if(min == 2){
            drawTwo(x4);
        } else if(min == 1){
            drawOne(x4);
        } else if(min == 0){
            drawZero(x4);
        }
    } 

    if(min >= 10){
        let minStr = (min).toString();

        // First digit:
        if(minStr.charAt(0) == "1"){
            drawOne(x3);
        } else if(minStr.charAt(0) == "2"){
            drawTwo(x3);
        } else if(minStr.charAt(0) == "3"){
            drawThree(x3);
        } else if(minStr.charAt(0) == "4"){
            drawFour(x3);
        } else if(minStr.charAt(0) == "5"){
            drawFive(x3);
        }
    
        // Second digit:
        if(minStr.charAt(1) == "0"){
            drawZero(x4)
        } else if(minStr.charAt(1) == "1"){
            drawOne(x4);
        } else if(minStr.charAt(1) == "2"){
            drawTwo(x4);
        } else if(minStr.charAt(1) == "3"){
            drawThree(x4);
        } else if(minStr.charAt(1) == "4"){
            drawFour(x4);
        } else if(minStr.charAt(1) == "5"){
            drawFive(x4);
        } else if(minStr.charAt(1) == "6"){
            drawSix(x4);
        } else if(minStr.charAt(1) == "7"){
            drawSeven(x4);
        } else if(minStr.charAt(1) == "8"){
            drawEight(x4);
        } else if(minStr.charAt(1) == "9"){
            drawNine(x4);
        } 
    }

}

function drawZero(x) {
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 0 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        ctx.arc(x, i, z, 0, 2 * Math.PI);
        ctx.fillStyle = offColor;
        ctx.fill();
        ctx.strokeStyle = offColor;
        ctx.stroke();
        ctx.closePath();
    }
}

function drawOne(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 1 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 800-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawTwo(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 2 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 600-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawThree(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 3 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 600-50 && i != 800-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawFour(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 4 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 400-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawFive(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 5 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 400-50 && i != 800-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawSix(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 6 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 400-50 && i != 600-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawSeven(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 7 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 400-50 && i != 600-50 && i != 800-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawEight(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 8 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 200-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawNine(x){
    var canvas = document.getElementById("clockCanvas");
    var ctx = canvas.getContext("2d");
    var yMin = 200;
    var yMax = 800;
    var z = 40;
    // ( 9 ):
    for (let i = 200-50; i <= 800-50; i += 200){
        ctx.beginPath();
        if (i != 200-50 && i != 800-50){
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = offColor;
            ctx.fill();
            ctx.strokeStyle = offColor;
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(x, i, z, 0, 2 * Math.PI);
            ctx.fillStyle = onColor;
            ctx.fill();
            ctx.strokeStyle = onColor;
            ctx.stroke();
            ctx.closePath();
        }
    }
}


// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', setup);
// Run a loop every 2 seconds:
setInterval(loop, 3000);






