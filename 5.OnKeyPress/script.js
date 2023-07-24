const box = document.getElementById("container");

document.addEventListener("keypress", function() {
    alert("Key Press is Working Properly")
    document.getElementById("clickme").innerText = "Thankyou For Pressing Key";
    document.getElementById("clickme").style.color = "darkgreen"
    document.getElementById("clickme").style.fontSize = "25px"
});