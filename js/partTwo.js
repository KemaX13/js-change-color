const button = document.querySelector(".button");
const color = document.querySelector(".color");

function changeBgColor() {
    const body = document.body;
    let newColor;
    
    if (body.style.backgroundColor == "darkblue") newColor = "red";
    else newColor = "darkblue";

    body.style.backgroundColor = newColor;
    color.textContent = newColor;
}

button.addEventListener("click", changeBgColor);