const box = document.getElementById("container");

box.addEventListener("dblclick", function() {
    alert("Double Click is Working Properly 👍🏼")
    document.getElementById("clickme").innerText = "Thankyou For Double Clicking";
    document.getElementById("clickme").style.color = "blue"
    document.getElementById("container").style.background = "grey"
    document.getElementById("clickme").style.fontSize = "25px"
});