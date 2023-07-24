const box = document.getElementById("container");

box.addEventListener("mouseout", function() {
    alert("Mouse Out is Working Properly")
    document.getElementById("clickme").innerText = "Thankyou For Outing Mouse";
    document.getElementById("clickme").style.color = "red"
    document.getElementById("clickme").style.fontSize = "25px"
});