var timeBegan = null; // did the clock start? 
var timeStopped = null; // at what time was the timer stopped? 
var stoppedDuration = 0; // how long was the timer stopped?
var startInterval = null; // stop the startInterval method
var flag = false; // control the start and stop of the timer

const timerContainer = document.getElementsByClassName("timer-container")[0]; 

timerContainer.addEventListener("click", function()
{
    if(!flag)
    {
        startTimer();
        flag = true; 
    }
    else 
    {
        stopTimer();
        flag = false;
    }
})