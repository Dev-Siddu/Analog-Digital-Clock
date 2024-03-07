// Main Content
document.addEventListener('DOMContentLoaded',function(){
    istClock();    // Executing before setting the interval for clock
    setInterval(istClock,1000);

    usClock();
    setInterval(usClock,1000);

    istDisplayDate();  // Executing befor esetting the inteval for displayDate
    setInterval(istDisplayDate,1000*60*60*24,)

    //DIsplay Us date
    usDisplayDate();
    setInterval(usDisplayDate,1000*60*60*24,)

});

// ----------------------------------------------------------------------------------------------------
// Get Hour hand at what degree it has to rotate
function getClockProperties(date){
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds(); 

    let hDeg = (h * 30) + (m * 1/2) + (s * 1/120) // h * 30 + m * (360/720);
    let mDeg = (m * 6) + (s * (6/60));
    let sDeg = (s * 6);

    let amOrPm = (h < 12)?'AM' : 'PM';

    let rotationDegrees = {
        "h" : h,
        "m" : m,
        "s" : s,
        "hDeg" : hDeg,
        "mDeg" : mDeg,
        "sDeg" : sDeg,
        "amOrpm" : amOrPm
    }
    return rotationDegrees;
}

// Get Day of Week  
function getDayOfWeek(dayOfWeekInNumber){
    let dayOfWeek;
    switch(dayOfWeekInNumber){
        case 1 : dayOfWeek = 'Monday'; break;
        case 2 : dayOfWeek = 'Tuesday'; break;
        case 3 : dayOfWeek = 'Wednesday'; break;
        case 4 : dayOfWeek = 'Thursday'; break;
        case 5 : dayOfWeek = 'Friday'; break;
        case 6 : dayOfWeek = 'Saturday'; break;
        case 7 : dayOfWeek = 'Sunday'; break;
    }
    return dayOfWeek;
}


// IST (Indian Standard Time)
function istClock(){
    let d = new Date();
    let rotationDegreesObject = getClockProperties(d);
    let hHand = document.querySelector('.hour-hand');
    hHand.style.webkitTransform  = `rotate(${rotationDegreesObject["hDeg"]}deg)`;

    let mHand = document.querySelector('.minute-hand');
    mHand.style.webkitTransform  = `rotate(${rotationDegreesObject["mDeg"]}deg)`;

    let sHand = document.querySelector('.second-hand');
    sHand.style.webkitTransform  = `rotate(${rotationDegreesObject["sDeg"]}deg)`;

    // For Digital Clock
    let placeForDigitalclock = document.querySelector('#time');
    placeForDigitalclock.innerHTML = `${rotationDegreesObject["h"]} : ${rotationDegreesObject["m"]} : ${rotationDegreesObject["s"]}  ${rotationDegreesObject["amOrpm"]}`;
}

// en-us (New- York TIme zone)
function usClock(){
    let date = new Date(); // Getting the current date & Time
    let usDateTime = date.toLocaleString('en-us',{timeZone : 'America/New_York'}); // Converting to US-NewYork TIme zone
    let d = new Date(usDateTime);
    let rotationDegreesObject = getClockProperties(d);

    let hHand = document.querySelector('.us-hour-hand');
    hHand.style.webkitTransform  = `rotate(${rotationDegreesObject["hDeg"]}deg)`;

    let mHand = document.querySelector('.us-minute-hand');
    mHand.style.webkitTransform  = `rotate(${rotationDegreesObject["mDeg"]}deg)`;

    let sHand = document.querySelector('.us-second-hand');
    sHand.style.webkitTransform  = `rotate(${rotationDegreesObject["sDeg"]}deg)`;

    //For Digital Clock
    let placeForDigitalclock = document.querySelector('.us-digital-clock #time');
    placeForDigitalclock.innerHTML = `${rotationDegreesObject["h"]} : ${rotationDegreesObject["m"]} : ${rotationDegreesObject["s"]}  ${rotationDegreesObject["amOrpm"]}`;
}

function istDisplayDate(){
    let date = new Date();      // Getting the day

    let day = date.getDate();   // Current date
    let month = date.getMonth();    // Current Month
    let fullyear = date.getFullYear(); // Current Year

    let dayOfWeekInNumber = date.getDay();  // Day of the week
    let dayOfWeek = getDayOfWeek(dayOfWeekInNumber);

    let placeForDate = document.querySelector('.date-container #date');
    placeForDate.innerHTML = `${day}-${month + 1}-${fullyear}  <div class="day">${dayOfWeek}</div>`;
};

function usDisplayDate(){
    let d = new Date(); // Getting the current date & Time
    let usDateTime = d.toLocaleString('en-us',{timeZone : 'America/New_York'});
    let date = new Date(usDateTime);

    let day = date.getDate();   // Current date
    let month = date.getMonth();    // Current Month
    let fullyear = date.getFullYear(); // Current Year

    let dayOfWeekInNumber = date.getDay();  // Day of the week
    let dayOfWeek = getDayOfWeek(dayOfWeekInNumber);

    let placeForDate = document.querySelector('.us-date-container #date');
    placeForDate.innerHTML = `${day}-${month + 1}-${fullyear}  <div class="day">${dayOfWeek}</div>`;
};
