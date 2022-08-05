//получим случайное целое число от 1 до 100 с помощью функции getRandom
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandom(1, 100);
console.log(randomNumber);


// const guessNumber = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const submit = document.querySelector('.submit');
const guesses = document.querySelector('.guesses');
const guessField = document.querySelector('.guessField');
const guessCount = 1;
let resetButton;

// пишем функцию checkGuess, которая будет проверять сделал ли игрок правильный выбор и соответствующе реагировать

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses:' + ' ';
    } 
    guesses.textContent += userGuess + '';

    if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You got it right!';
        result.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        result.textContent = 'Game over!';
        setGameOver();
    } else {
        result.textContent = 'Wrong!';
        result.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low';
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was too high';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

submit.addEventListener('click', checkGuess);

function setGameOver {
    guessField.disabled = true;
    submit.disabled = true;
    const resetButton = document.createElement('button')
}





