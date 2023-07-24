const box = document.getElementById("container");

box.addEventListener("keydown", function(e) {
    alert("Keydown is Working Properly")
    document.getElementById("clickme").innerText = e.key + "is Keydown";
    document.getElementById("clickme").style.color = "blue"
    document.getElementById("clickme").style.fontSize = "25px"
});

box.addEventListener("keyup", function(e) {
    alert("Keyup is Working Properly")
    document.getElementById("clickme").innerText = e.key + "is Keyup";
    document.getElementById("clickme").style.color = "red"
    document.getElementById("clickme").style.fontSize = "25px"
});