const led = document.querySelector(".led");
const bpmIndicator = document.querySelector(".bpm-indicator");
const bpm = 60;

bpmIndicator.innerHTML = bpm + " BPM";

function replaceOffAndOn() {
    if(led.classList.contains("led-off")) {
        led.classList.replace("led-off", "led-on");
        console.log("LED is on");
    }
    else {
        led.classList.replace("led-on", "led-off");
        console.log("LED is off");
    }
}

function timeOut() {
    replaceOffAndOn();
    setTimeout(timeOut, 1/bpm*60*1000);
}

led.addEventListener("click", timeOut);