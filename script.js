'use strict';
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const check = document.querySelector('.check');
const again = document.querySelector('.btn');
const guess = document.querySelector('.guess');

let highscoreValue = 0;
let secertNumber = Math.trunc(Math.random() * 20 + 1);
let scoreValue = 20;
const displayMessage = msg => {
  message.textContent = msg;
};

check.addEventListener('click', e => {
  e.preventDefault();
  const guessValue = +number.value;
  if (!guessValue) {
    displayMessage('⛔️ No number!');
  } else if (guessValue !== secertNumber) {
    if (scoreValue > 1) {
      displayMessage(
        guessValue > secertNumber ? '📈 Too high!' : '📉 Too low!'
      );
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      displayMessage('💥 You lost the game!');
      scoreValue = 0;
      score.textContent = scoreValue;
    }
  } else if (guessValue === secertNumber) {
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }
    displayMessage('🎉 Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    guess.style.width = '30rem';
      guess.textContent =guessValue ;
    number.value = '';
  }
});

again.addEventListener('click', e => {
  e.preventDefault();
  secertNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  guess.style.width = '15rem';
  guess.textContent = '?';
  scoreValue = 20;
  number.value = '';

  score.textContent = scoreValue;
});
