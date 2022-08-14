const led = document.querySelector(".led");
const bpmIndicator = document.querySelector(".bpm-indicator");
const ledSwitch = document.querySelector(".led-switch");
const bpm = 60;

bpmIndicator.innerHTML = bpm + " BPM";

function replaceOffAndOn() {
    if(led.classList.contains("led-off")) {
        led.classList.replace("led-off", "led-state1");
        console.log("LED is on");
    }
    else {
        led.classList.replace("led-state1", "led-off");
        console.log("LED is off");
    }
}

function timeOut() {
    replaceOffAndOn();
    setTimeOut =  setTimeout(timeOut, 1/bpm*60*1000);
}

function ledSwitchFunction() {
    if(ledSwitch.classList.contains("led-switch-off")) {
        ledSwitch.classList.replace("led-switch-off", "led-switch-on");
        ledSwitch.classList.add("led-animation-on");
        setTimeout(() => {ledSwitch.classList.remove("led-animation-on")}, 300);

        timeOut();
    }
    else {
        ledSwitch.classList.replace("led-switch-on", "led-switch-off");
        ledSwitch.classList.add("led-animation-off");
        setTimeout(() => {ledSwitch.classList.remove("led-animation-off")}, 300);

        clearTimeout(setTimeOut);
    }
}

led.addEventListener("click", timeOut);
ledSwitch.addEventListener("click", ledSwitchFunction);