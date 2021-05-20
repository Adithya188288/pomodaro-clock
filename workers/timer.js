var timerId = undefined;
var endDifference = undefined;
var paused = false;
onmessage = function(e) {
    console.log('Message received from main script');
    let end=30000; // 30 seconds
    if(e.data === 'start'){
        startTime = Date.now();
        if(paused){
            end = endDifference
        } 
        endTime = startTime + end;
        endDifference = end;
        console.log("Timer Started...", startTime);
        timerId = setInterval(function(){
            let currentTime = new Date().getTime();
            let isCompleted = currentTime >= endTime
            if(isCompleted){
                clearInterval(timerId);
                // remainingTime.textContent = '00:00:00'
                postMessage('completed')
            }else{
            //    secondsElapsed = secondsElapsed + 1000;
               let result = getRemainingTimeAsText(endTime, currentTime)
               postMessage(['tick', result])
               endDifference = endDifference - 1000;
            }
        },1000)
        console.log('timerId', timerId)
    }else if(e.data === 'stop'){
        clearInterval(timerId);
        postMessage('pause');
        paused = true;
    }else if(e.data === 'reset'){
        clearInterval(timerId);
        timerId = undefined;
        postMessage('reset');
    }
  }


function getRemainingTimeAsText(endTime, currentTime){
    var timeleft =  endTime - currentTime;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);    
    var result = `${hours}:${minutes}:${seconds}`
    return result;
}
