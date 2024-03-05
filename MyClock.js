function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hDeg = h * 30 + m * (360/720);
    let mDeg = m * 6 + s * (360/3600);
    let sDeg = (s * 6);

    // console.log(hDeg + " " + mDeg + " " + sDeg);

    let hHand = document.querySelector('.hour-hand');
    hHand.style.webkitTransform  = `rotate(${hDeg}deg)`;

    let mHand = document.querySelector('.minute-hand');
    mHand.style.webkitTransform  = `rotate(${mDeg}deg)`;

    let sHand = document.querySelector('.second-hand');
    sHand.style.webkitTransform  = `rotate(${sDeg}deg)`;
}

document.addEventListener('DOMContentLoaded',function(){
    setInterval(clock,1000);
});