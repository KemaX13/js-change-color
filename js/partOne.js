const button = document.querySelector('.button');
const color = document.querySelector('.color');

function changeBgColor() {
    document.body.style.backgroundColor = 'darkblue';
    color.textContent = 'darkblue';
}

button.addEventListener('click', changeBgColor);
