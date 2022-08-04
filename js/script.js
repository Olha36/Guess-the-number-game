//получим случайное целое число от 1 до 100 с помощью функции getRandom
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// пишем функцию checkGuess, которая будет проверять сделал ли игрок правильный выбор и соответствующе реагировать

const guessNumber = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const submit = document.querySelector('.submit');
const guess = document.querySelector('.guess');
const guessCount = 1;
let resetButton;

function checkGuess() {
    alert('hello')
}
checkGuess()
