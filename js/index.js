console.log("Hi from JS");
require('../css/index.css');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let remainingTime = document.getElementById('result');

let startTime,endTime;
let end=30000; // 30 seconds
var endDifference = undefined;
var paused = false; 
let timeWorker = new Worker('../js/timer.js');
let resetClock = false;

start.onclick = function(){
    if (window.Worker) {
        if(resetClock){
            resetClock = false;
        }
        if(paused){
            paused = false;
            end = endDifference
        }else{
            endDifference = end;
        }
        timeWorker.postMessage("Sending Message From Main Thread")
        timeWorker.postMessage('start')
        startTime = Date.now();
        timeWorker.postMessage('tick')
      }
       
        endTime = startTime + end;
        
};


timeWorker.onmessage = function(e) {
    console.log('Message received from worker', e.data);
    if(window.Worker){
        if(e.data == 'tack'){
            let currentTime = new Date().getTime();
            let isCompleted = currentTime >= endTime;
            if(isCompleted){
                endDifference = undefined;
                paused = false
                remainingTime.textContent = '00:00:00'
            }else{
                if(!resetClock && !paused){
                    let result = getRemainingTimeAsText(endTime, currentTime)
                    timeWorker.postMessage('tick')
                    remainingTime.textContent = result;
                }
                endDifference = endDifference - 500;
                console.log('endDifference', endDifference)
            }
            
        }
    }
  }


stop.onclick = function(){
    paused = true
    timeWorker.postMessage('stop')
};

reset.onclick = function(){
        resetClock=true
        endDifference = undefined;
        end=30000
        paused=false;    
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
