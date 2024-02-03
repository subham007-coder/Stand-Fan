let startBtn = document.querySelector(".green");
let fanOn = document.querySelector(".fan-blades");
let speed1 = document.querySelector(".blue1");
let speed2 = document.querySelector(".blue2");
let speed3 = document.querySelector(".blue3");

startBtn.addEventListener("click", () => {
    fanOn.classList.toggle("ani");
    fanOn.classList.remove("ani1");
    fanOn.classList.remove("ani2");
    fanOn.classList.remove("ani3");
    startBtn.classList.toggle("green");
    startBtn.classList.add("red");

    if (startBtn.innerHTML == "On") {
        startBtn.innerHTML = "Off";
        // fanOn.classList.remove("ani");
        // fanOn.classList.add("aniOff");
    } else{
        startBtn.innerHTML = "On";
    }
});

speed1.addEventListener("click", () => {
    if (startBtn.classList == "red") {
        console.log("hii");
        fanOn.classList.add("ani1");
        fanOn.classList.remove("ani");
        fanOn.classList.remove("ani2");
        fanOn.classList.remove("ani3");
    }
});

speed2.addEventListener("click", () => {
    if (startBtn.classList == "red") {
        console.log("hii");
        fanOn.classList.add("ani2");
        fanOn.classList.remove("ani");
        fanOn.classList.remove("ani1");
        fanOn.classList.remove("ani3");
    }
});

speed3.addEventListener("click", () => {
    if (startBtn.classList == "red") {
        console.log("hii");
        fanOn.classList.add("ani3");
        fanOn.classList.remove("ani");
        fanOn.classList.remove("ani1");
        fanOn.classList.remove("ani2");
    }
});