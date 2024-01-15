const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");

let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let click = 0;

function start() {
    if(click == 0){
    timer = true;
    stopWatch();
    }
    click = 1;
};

function stopWatch(){
    if(timer){
        milisec++;

    if(milisec == 100){
        sec++;
        milisec = 0;
    }
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hr++;
        min = 0;
    }

    let hrStr = hr;
    let minStr = min;
    let secStr = sec;
    let miliSecStr = milisec;

    if(hrStr < 10){
        hrStr = '0' + hrStr;
    }
    if(minStr < 10){
        minStr = '0' + minStr;
    }
    if(secStr < 10){
        secStr = '0' + secStr;
    }
    if(miliSecStr < 10){
        miliSecStr = '' + miliSecStr;
    }

    document.querySelector(".hr").innerHTML = hrStr;
    document.querySelector(".min").innerHTML = minStr;
    document.querySelector(".sec").innerHTML = secStr;
    document.querySelector(".milisec").innerHTML = miliSecStr;
    setTimeout(stopWatch, 10);
    }
}
function stop(){
    if(click == 1){
    timer = false;
    }
    click = 0;
}
function reset(){
    if(click == 1 || click == 0){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

    document.querySelector(".hr").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";
    document.querySelector(".milisec").innerHTML = "00"
    }
    click = 0;
    document.querySelector(".lapdisplay").innerHTML = "00" + " : " + "00" + " : " + "00" + " : " + "00";
    document.querySelector(".lapdisplay").style.display = "none"
}
lapBtn.addEventListener('click', function(){
    document.querySelector(".lapdisplay").style.display = "block";
    document.querySelector(".lapdisplay").style.display = "flex";
    let h = document.querySelector(".hr").innerHTML;
    let m = document.querySelector(".min").innerHTML;
    let s = document.querySelector(".sec").innerHTML;
    let ms = document.querySelector(".milisec").innerHTML;
    
    document.querySelector(".lapdisplay").innerHTML = h + " : " + m + " : " + s + " : " + ms;
})