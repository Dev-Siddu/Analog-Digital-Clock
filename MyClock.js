function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hDeg = (h * 30) + (m * 1/2) + (s * 1/120) // h * 30 + m * (360/720);
    let mDeg = (m * 6) + (s * (6/60));
    let sDeg = (s * 6);

    // console.log(hDeg + " " + mDeg + " " + sDeg);

    let hHand = document.querySelector('.hour-hand');
    hHand.style.webkitTransform  = `rotate(${hDeg}deg)`;

    let mHand = document.querySelector('.minute-hand');
    mHand.style.webkitTransform  = `rotate(${mDeg}deg)`;

    let sHand = document.querySelector('.second-hand');
    sHand.style.webkitTransform  = `rotate(${sDeg}deg)`;

    // For Digital Clock
    let placeForDigitalclock = document.querySelector('#time');
    let amOrPm = (h < 12)?'AM' : 'PM';
    placeForDigitalclock.innerHTML = `${h} : ${m} : ${s}  ${amOrPm}`;
}

function displayDate(){
    let date = new Date();      // Getting the day

    let day = date.getDate();   // Current date
    let month = date.getMonth();    // Current Month
    let fullyear = date.getFullYear(); // Current Year

    let dayOfWeekInNumber = date.getDay();  // Day of the week
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
    //console.log(dayOfWeek);
    let placeForDate = document.querySelector('.date-container #date');
    placeForDate.innerHTML = `${day}-${month}-${fullyear}  <span class="day">${dayOfWeek}</span>`;
};

document.addEventListener('DOMContentLoaded',function(){
    clock();    // Executing before setting the interval for clock
    setInterval(clock,1000);

    displayDate();  // Executing befor esetting the inteval for displayDate
    setInterval(displayDate,1000*60*60*24,)
});