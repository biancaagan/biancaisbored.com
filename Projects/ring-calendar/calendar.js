/*

  This code is an updated version of the 
  device data dashboard for conndev at nyu itp.

  created by Bianca Gan 2/16/23
  updated 8/13/25

*/

function setup(){
  // Canvas:
  var canvas = document.getElementById("calCanvas");
  var ctx = canvas.getContext("2d");

  let circleColor = "#f57c12ff"

  ctx.beginPath();

  // Calendar container:
  ctx.translate(0, 40);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.roundRect(10, 0, 780, 800, 40);
  ctx.fillStyle = "#d0e0e3ff"
  ctx.fill();
  ctx.stroke();

  ctx.font = "bold 28px Courier New";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";

  // ------------------ Year ------------------
  let currentYear = new Date().getFullYear();
  ctx.fillStyle = "#f57c12ff"
  ctx.fillText(currentYear, 700, 55);

  // ------------------ Months ------------------
  ctx.fillStyle = "black";
  ctx.fillText("JAN", 100, 55);
  ctx.fillText("FEB", 200, 55);
  ctx.fillText("MAR", 300, 55);
  ctx.fillText("APR", 400, 55);
  ctx.fillText("MAY", 500, 55);
  ctx.fillText("JUN", 600, 55);

  ctx.fillText("JUL", 100, 145);
  ctx.fillText("AUG", 200, 145);
  ctx.fillText("SEP", 300, 145);
  ctx.fillText("OCT", 400, 145);
  ctx.fillText("NOV", 500, 145);
  ctx.fillText("DEC", 600, 145);

  // ------------------ Months Circle ------------------
  switch(new Date().getMonth()){
    case 0: // JAN
      monthX = 100;
      monthY = 48;
      break;
    case 1: // FEB
      monthX = 200;
      monthY = 48;
      break;
    case 2: // MAR
      monthX = 300;
      monthY = 48;
      break;
    case 3: // APR
      monthX = 400;
      monthY = 48;
      break;
    case 4: // MAY
      monthX = 500;
      monthY = 48;
      break;
    case 5: // JUN
      monthX = 600;
      monthY = 48;
      break;
    case 6: // JUL
      monthX = 100;
      monthY = 138;
      break;
    case 7: // AUG
      monthX = 200;
      monthY = 138;
      break;
    case 8: // SEP
      monthX = 300;
      monthY = 138;
      break;
    case 9: // OCT
      monthX = 400;
      monthY = 138;
      break;
    case 10:  // NOV
      monthX = 500;
      monthY = 138;
      break;
    case 11:  // DEC
      monthX = 600;
      monthY = 138;
      break;
  }

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(monthX, monthY, 40, 0, 2 * Math.PI);
  ctx.strokeStyle = circleColor;
  ctx.stroke();

  // ------------------ Day #s ------------------

  ctx.font = "normal 36px Courier New";
  ctx.fillStyle = "black";
  ctx.fillText("1", 100, 245);
  ctx.fillText("2", 200, 245);
  ctx.fillText("3", 300, 245);
  ctx.fillText("4", 400, 245);
  ctx.fillText("5", 500, 245);
  ctx.fillText("6", 600, 245);
  ctx.fillText("7", 700, 245);

  ctx.fillText("8", 100, 345);
  ctx.fillText("9", 200, 345);
  ctx.fillText("10", 300, 345);
  ctx.fillText("11", 400, 345);
  ctx.fillText("12", 500, 345);
  ctx.fillText("13", 600, 345);
  ctx.fillText("14", 700, 345);

  ctx.fillText("15", 100, 445);
  ctx.fillText("16", 200, 445);
  ctx.fillText("17", 300, 445);
  ctx.fillText("18", 400, 445);
  ctx.fillText("19", 500, 445);
  ctx.fillText("20", 600, 445);
  ctx.fillText("21", 700, 445);

  ctx.fillText("22", 100, 545);
  ctx.fillText("23", 200, 545);
  ctx.fillText("24", 300, 545);
  ctx.fillText("25", 400, 545);
  ctx.fillText("26", 500, 545);
  ctx.fillText("27", 600, 545);
  ctx.fillText("28", 700, 545);

  ctx.fillText("29", 100, 645);
  ctx.fillText("30", 200, 645);
  ctx.fillText("31", 300, 645);

  // ------------------ Day #s Circle ------------------
  let dayX;
  let dayY;

  switch(new Date().getDate()){
    case 1:
      dayX = 100;
      dayY = 235;
      break;
    case 2:
      dayX = 200;
      dayY = 235;
      break;
    case 3:
      dayX = 300;
      dayY = 235;
      break;
    case 4:
      dayX = 400;
      dayY = 235;
      break;
    case 5:
      dayX = 500;
      dayY = 235;
      break;
    case 6:
      dayX = 600;
      dayY = 235;
      break;
    case 7:
      dayX = 700;
      dayY = 235;
      break;
    case 8:
      dayX = 100;
      dayY = 335;
      break;
    case 9:
      dayX = 200;
      dayY = 335;
      break;
    case 10:
      dayX = 300;
      dayY = 335;
      break;
    case 11:
      dayX = 400;
      dayY = 335;
      break;
    case 12:
      dayX = 500;
      dayY = 335;
      break;
    case 13:
      dayX = 600;
      dayY = 335;
      break;
    case 14:
      dayX = 700;
      dayY = 335;
      break;
    case 15:
      dayX = 100;
      dayY = 435;
      break;
    case 16:
      dayX = 200;
      dayY = 435;
      break;
    case 17:
      dayX = 300;
      dayY = 435;
      break;
    case 18:
      dayX = 400;
      dayY = 435;
      break;
    case 19:
      dayX = 500;
      dayY = 435;
      break;
    case 20:
      dayX = 600;
      dayY = 435;
      break;
    case 21:
      dayX = 700;
      dayY = 435;
      break;
    case 22:
      dayX = 100;
      dayY = 535;
      break;
    case 23:
      dayX = 200;
      dayY = 535;
      break;
    case 24:
      dayX = 300;
      dayY = 535;
      break;
    case 25:
      dayX = 400;
      dayY = 535;
      break;
    case 26:
      dayX = 500;
      dayY = 535;
      break;
    case 27:
      dayX = 600;
      dayY = 535;
      break;
    case 28:
      dayX = 700;
      dayY = 535;
      break;
    case 29:
      dayX = 100;
      dayY = 635;
      break;
    case 30:
      dayX = 200;
      dayY = 635;
      break;
    case 31:
      dayX = 300;
      dayY = 635;
      break;
  }

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(dayX, dayY, 40, 0, 2 * Math.PI);
  ctx.strokeStyle = circleColor;
  ctx.stroke();
  ctx.stroke();

  // ------------------ Days ------------------
  ctx.font = "bold 28px Courier New";
  ctx.fillText("SUN", 100, 740);
  ctx.fillText("MON", 200, 740);
  ctx.fillText("TUES", 300, 740);
  ctx.fillText("WED", 400, 740);
  ctx.fillText("THUR", 500, 740);
  ctx.fillText("FRI", 600, 740);
  ctx.fillText("SAT", 700, 740);

  // ------------------ Days Circle ------------------
  let dayNameX;

  switch(new Date().getDay()){
    case 0:
      dayNameX = 100;
      break;
    case 1:
      dayNameX = 200;
      break;
    case 2:
      dayNameX = 300;
      break;
    case 3:
      dayNameX = 400;
      break;
    case 4:
      dayNameX = 500;
      break;
    case 5:
      dayNameX = 600;
      break;
    case 6:
      dayNameX = 700;
      break;
  }
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(dayNameX, 732, 40, 0, 2 * Math.PI);
  ctx.strokeStyle = circleColor;
  ctx.stroke();

}


// On page load, call the setup function:
document.addEventListener('DOMContentLoaded', setup);
// Run a loop every 2 seconds:
setInterval(loop, 3000);






