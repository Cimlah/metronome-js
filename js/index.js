const bpmIndicator = document.querySelector(".bpm-indicator");
const bpm = 120;
const leds = document.querySelectorAll(".led");
const switchContainers = document.querySelectorAll(".switch-container");
const ledSwitches = document.querySelectorAll(".led-switch");

bpmIndicator.innerHTML = bpm + " BPM";

switchContainers.forEach((value, i) => {
    value.addEventListener("click", () => {
        if(ledSwitches[i].classList.contains("led-switch-off")) {
            ledSwitches[i].classList.replace("led-switch-off", "led-switch-on"); // Move the switch to ON position
            ledSwitches[i].classList.add("led-animation-on"); // Add animation for the switch
            setTimeout(() => {ledSwitches[i].classList.remove("led-animation-on")}, 300); // Remove animation class after 0.3 seconds
            leds[i].classList.replace("led-off", "led-state1"); // Turn on the LED
        } // Turn on the LED
        else {
            ledSwitches[i].classList.replace("led-switch-on", "led-switch-off"); // Move the switch to OFF position
            ledSwitches[i].classList.add("led-animation-off"); // Add animation for the switch
            setTimeout(() => {ledSwitches[i].classList.remove("led-animation-off")}, 300); // Remove animation class after 0.3 seconds
            if(leds[i].classList.contains("led-state1")) {leds[i].classList.replace("led-state1", "led-off");} // Turn off the LED
            else {leds[i].classList.replace("led-state2", "led-off");} // Turn off the LED
        } // Turn off the LED
    })
});