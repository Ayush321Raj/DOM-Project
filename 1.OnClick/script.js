const box = document.getElementById("container");

box.addEventListener("click", function () {
    document.getElementById("clickme").innerText = "Continue Clicking To See Magic 👇🏻";
    document.getElementById("detail").innerText = "I am a Developer 🧑🏻‍💻";
    // document.getElementById("clickme").style.color = "white";
    // document.getElementById("detail").style.color = "red";
    document.getElementById("detail").style.boxShadow = "0 0 10px"
    document.getElementById("detail").style.borderRadius = "20px"
    document.getElementById("detail").style.padding = "10px"
    document.getElementById("clickme").style.boxShadow = "0 0 10px"
    document.getElementById("clickme").style.borderRadius = "20px"
    document.getElementById("clickme").style.padding = "10px"
    document.getElementById("container").style.boxShadow = "0 0 10px black"
    
    const randomColor = () => {
        let val = "0123456789ABCDEF";
        let cons = "#";

        for(let i = 0; i < 6; i++) {
            cons += val[Math.floor(Math.random() * 16)];
        }
        return cons;
    }

    function changeRandomColor() {
        document.getElementById("clickme").style.backgroundColor = randomColor();
        document.getElementById("clickme").style.color = randomColor();
        document.getElementById("container").style.backgroundColor = randomColor();
        document.body.style.backgroundColor = randomColor();
        document.getElementById("detail").style.backgroundColor = randomColor();
        document.getElementById("detail").style.color = randomColor();
    }

    document.getElementById("container").addEventListener("click", changeRandomColor);
});
