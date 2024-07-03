const hourhand = document.getElementById('hour-hand');
const minutehand = document.getElementById('minute-hand');
const secondhand = document.getElementById('second-hand');
function clockTick() {
    const anadate =new Date();
    const anaseconds =anadate.getSeconds() / 60;
    const anaminutes =(anaseconds + anadate.getMinutes()) /60;
    const anahours = (anaminutes + anadate.getHours()) / 12;
    rotateClockHand(secondhand,anaseconds);
    rotateClockHand(minutehand,anaminutes);
    rotateClockHand(hourhand,anahours);
}
function rotateClockHand(element,rotation) {
    element.style.transform = `rotate(${rotation * 360}deg)`;
    
}
setInterval(clockTick, 1000);