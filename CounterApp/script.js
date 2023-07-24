const decrembtn = document.getElementById("decrembtn");
const incrembtn = document.getElementById("incrembtn");
const resetbtn = document.getElementById("resetbtn");
const displayval = document.getElementById("displayval");

decrembtn.addEventListener("click", () => {
    const value = Number(displayval.innerText);
    if (value > 0) {
        displayval.innerText = value - 1;
    } else {
        alert("Negative Value Not allowed")
    }
});

incrembtn.addEventListener("click", () => {
    const value = Number(displayval.innerText);
    if(value >= 25) {
        alert("Value greater than 25 not allowed");
    } else {
        displayval.innerText = value + 1;
    }
});

resetbtn.addEventListener("click", () => {
    displayval.innerText = 0;
});