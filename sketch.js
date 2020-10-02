var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var hour1, min, sec;
var box;

function setup(){
    createCanvas(170,30); 
    angleMode(DEGREES);   
}

function draw(){
    background(21,314,117);
    
    fill("blue");
    textSize(50);
    textStyle(BOLD);
    textSize(20);
    text("TIME : "+hour1+":"+min+":"+sec,20,20);
    
    getTime();
   
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
     hour1 = datetime.slice(11,13);
     min = datetime.slice(14,16);
     sec = datetime.slice(17,19);
}