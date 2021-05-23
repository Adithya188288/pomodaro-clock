
onmessage = function(e) {
    console.log('Message received from main script');
    if(e.data === 'tick'){
       workerTimeout() 
    }
  }

workerTimeout = () => {
    setTimeout(() => postMessage('tack'), 500)
}  

