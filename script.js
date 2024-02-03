let startBtn = document.querySelector("label");
let fanOn = document.querySelector(".fan-blades");

startBtn.addEventListener("click", () => {
    fanOn.classList.toggle("ani1");
    startBtn.classList.toggle("green");
    startBtn.classList.add("red");
});

