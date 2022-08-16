const bpmIndicator = document.querySelector(".bpm-indicator");
let bpm = 120;
const leds = document.querySelectorAll(".led");
const switchContainers = document.querySelectorAll(".switch-container");
const ledSwitches = document.querySelectorAll(".led-switch");
const mainSwitch = document.querySelector(".main-switch");
const mainSwitchContainer = document.querySelector(".main-switch-container");
let bpmInput = document.querySelector(".bpm-input");

function setBpmValue() {
    bpmInput.addEventListener("blur", () => {
        bpm = bpmInput.value;
        if(bpm == "") {bpm = 120;}
        console.log(bpm);
    })
    bpmIndicator.innerHTML = bpm + " BPM";
}

function animationsForSwitchesAndLeds() {
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
}

function animationsForMainSwitch() {
    mainSwitchContainer.addEventListener("click", () => {
        if(mainSwitch.classList.contains("main-switch-off")) {
            mainSwitch.classList.add("main-switch-on-anim");
            setTimeout(() => {mainSwitch.classList.remove("main-switch-on-anim")}, 300);
            mainSwitch.classList.replace("main-switch-off", "main-switch-on"); // Add animation and set switch to ON position
        }
        else {
            mainSwitch.classList.add("main-switch-off-anim");
            setTimeout(() => {mainSwitch.classList.remove("main-switch-off-anim")}, 300);
            mainSwitch.classList.replace("main-switch-on", "main-switch-off"); // Add animation and set switch to OFF position
        }
    });
}

function ledSequencer() {
    let ids = []; // Create an array with IDs of LEDs (Don't know why, but they keep on changing
    
    mainSwitchContainer.addEventListener("click", () => {
        if(mainSwitch.classList.contains("main-switch-off")) {
            for(let i = 0; i < 4; i++) {
                clearTimeout(ids[i]); // Clear the `Timeout` for each element
            }
            ids = []; // Make the IDs array empty, so the values change, but not quantity
            return;
        } // Stop the sequence
        else {
            leds.forEach((value, i) => {
                (() => {
                    setTimeout(() => {
                        if(value.classList.contains("led-state1")) {
                            value.classList.replace("led-state1", "led-state2");
                        }
                        else {
                            value. classList.replace("led-state2", "led-state1");
                        }
                    }, 1/bpm*60*1000*i)
                }) (); // First iteration with no delay (with no `setInterval`)
            
                setTimeout(() => {
                    id = setInterval(() => {
                        if(value.classList.contains("led-state1")) {
                            value.classList.replace("led-state1", "led-state2");
                        }
                        else {
                            value. classList.replace("led-state2", "led-state1");
                        }
                    }, 1/bpm*60*1000*4)

                    ids.push(id); // Add IDs to the array
                }, 1/bpm*60*1000*i)
            })
        } // Start the sequence
    })
}

setBpmValue();
animationsForSwitchesAndLeds();
animationsForMainSwitch();
ledSequencer()