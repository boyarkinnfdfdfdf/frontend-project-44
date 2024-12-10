/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
import getRandomInt from '../games/generateRandomNumb.js';
import startGame from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const generateRound = () => {
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
