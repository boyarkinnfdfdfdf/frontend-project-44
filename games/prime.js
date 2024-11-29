/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import getRandomInt from '../src/generateRandomNumb.js';
import startGame from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = String(getRandomInt(min, max));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(generateRound, rules);