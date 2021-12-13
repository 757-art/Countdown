var endDate = new Date("Jan 01, 2022 00:00:00").getTime();
var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let secs = Math.floor(t / 1000);
        let mins = Math.floor(secs / 60);
        let hours = Math.floor(mins / 60);
        let days = Math.floor(hours / 24);

        secs %=60;
        mins %=60;
        hours %=24;
        
       

        document.getElementById("timer-days").innerHTML = days;
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2);
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2);
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2);
    
    } 
    
}, 1000);