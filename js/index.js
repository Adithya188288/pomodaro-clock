console.log("Hi from JS");

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let remainingTime = document.getElementById('result');

let timerId = undefined, startTime,endTime;
let end=30000; // 30 seconds
let secondsElapsed = 0; 

start.onclick = function(){
    startTime = Date.now();
    endTime = startTime + end;
    console.log("Timer Started...", startTime);
    timerId = setInterval(function(){
        let currentTime = new Date().getTime();
        let isCompleted = currentTime >= endTime
        if(isCompleted){
            clearInterval(timerId);
            remainingTime.textContent = '00:00:00'
        }else{
           secondsElapsed = secondsElapsed + 1000;
           let result = getRemainingTimeAsText(endTime, currentTime)
           remainingTime.textContent = result
        }
    },1000)
};

stop.onclick = function(){
    console.log("stop button clicked...");
    if(secondsElapsed < end){
        end = end - secondsElapsed
    }else{
        end = secondsElapsed - end;
    }
    secondsElapsed = 0;
    clearInterval(timerId);
};

reset.onclick = function(){
    console.log("reset button clicked");
    clearInterval(timerId);
    remainingTime.textContent = '00:00:00'
};




function getRemainingTimeAsText(endTime, currentTime){
    var timeleft =  endTime - currentTime;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);    
    var result = `${hours}:${minutes}:${seconds}`
    return result;
}
