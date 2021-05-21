console.log("Hi from JS");
require('../css/index.css');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let remainingTime = document.getElementById('result');

let timerId = undefined, startTime,endTime;
let end=30000; // 30 seconds
let secondsElapsed = 0; 
let timeWorker = new Worker('./timer.js')

start.onclick = function(){
    if (window.Worker) {
        timeWorker.postMessage("Sending Message From Main Thread")
        timeWorker.postMessage('start')
      }
};


timeWorker.onmessage = function(e) {
    console.log('Message received from worker', e.data);

    if(window.Worker){
        if(e.data[0] == 'tick'){
            remainingTime.textContent = e.data[1]
        }else if(e.data == 'completed' || e.data == 'reset'){
            remainingTime.textContent = '00:00:00'
        }
    }
  }


stop.onclick = function(){
    if(window.Worker){
        timeWorker.postMessage('stop')
    }
};

reset.onclick = function(){
    if(window.Worker){
        timeWorker.postMessage('reset')
    }
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
