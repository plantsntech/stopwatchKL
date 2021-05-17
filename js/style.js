// Define variables
let seconds = 0,
    minutes = 0,
    hours = 0;

// Define variable to hold display value
let disSec = 0,
    disMin = 0,
    disHr = 0;

// Variable holds interval function
let interval = null;

// Var hold stopwatch status

let status = "stopped";


// Stopwatch Function
function stopWatch(){

    seconds++;

    // if statements display time
    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }
    // If sec less then 1 digit add a 0 value

    if(seconds < 10){
        disSec = "0" + seconds.toString();
    }
    else{
        disSec = seconds;
    }

    if(minutes < 10 ){
        disMin = "0" + minutes.toString();
    }
    else{
        disMin = minutes;
    }

    if(hours < 10){
        disHr = "0" + hours.toString();
    }
    else{
        disHr = hours;
    }

    // Display upadted time values
    document.getElementById("display").innerHTML = disHr +":"+ disMin +":"+ disSec;

}

function startStop(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started"
        showCss();
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
        hideCss();
    }
}


// function reset

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    hideCss();
}

// show css animation

function showCss(){
    var aniCss = document.getElementsByTagName('body');
          for(i=0; i<aniCss.length; i++) {
            aniCss[i].style.animation = 'scroll 70s linear infinite';
            aniCss[i].style.perspective = '1000px';
            aniCss[i].style.perspectiveOrigin = '50% 50%';
            }

}

// hide Css

function hideCss(){
    var aniCss = document.getElementsByTagName('body');
          for(i=0; i<aniCss.length; i++) {
            aniCss[i].style.animation = 'none';
            aniCss[i].style.perspective = 'none';
            aniCss[i].style.perspectiveOrigin = 'none';
            }

}