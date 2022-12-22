const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();
    const generatedColor = `rgba(${red},${green},${blue})`;
    document.body.style.backgroundColor = generatedColor
    color.textContent = generatedColor
});

function getRandomNumber() {
    return Math.floor(Math.random()*255);
}