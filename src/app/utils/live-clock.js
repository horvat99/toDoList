export const clock = () => {
    let spanForClock = document.querySelector("#clock");
    let d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    spanForClock.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    setInterval(clock,1000);
}