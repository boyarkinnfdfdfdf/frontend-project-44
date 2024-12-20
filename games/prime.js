/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
import getRandomInt from '../utils/generateRandomNumb.js';
import startGame from '../src/index.js';

const theTaskLine = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export default () => startGame(generateRound, theTaskLine);
