const led = document.querySelector(".led");
const bpmIndicator = document.querySelector(".bpm-indicator");
const ledSwitch = document.querySelector(".led-switch");
const bpm = 120;

bpmIndicator.innerHTML = bpm + " BPM";

function stateChange() {
    if(led.classList.contains("led-state1")) {
        led.classList.replace("led-state1", "led-state2");
        console.log("LED is on");
    }
    else {
        led.classList.replace("led-state2", "led-state1");
        console.log("LED is off");
    }
}

function timeOut() {
    stateChange();
    setTimeOut =  setTimeout(timeOut, 1/bpm*60*1000);
}

function ledSwitchFunction() {
    if(ledSwitch.classList.contains("led-switch-off")) {
        led.classList.replace("led-off", "led-state1");
        ledSwitch.classList.replace("led-switch-off", "led-switch-on");
        ledSwitch.classList.add("led-animation-on");
        setTimeout(() => {ledSwitch.classList.remove("led-animation-on")}, 300);

        timeOut();
    }
    else {
        if(led.classList.contains("led-state1")) {
            led.classList.replace("led-state1", "led-off");
        }
        else {
            led.classList.replace("led-state2", "led-off");
        }

        ledSwitch.classList.replace("led-switch-on", "led-switch-off");
        ledSwitch.classList.add("led-animation-off");
        setTimeout(() => {ledSwitch.classList.remove("led-animation-off")}, 300);

        clearTimeout(setTimeOut);
    }
}

led.addEventListener("click", timeOut);
ledSwitch.addEventListener("click", ledSwitchFunction);