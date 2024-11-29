/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
import getRandomInt from '../src/generateRandomNumb.js';
import startGame from '../src/index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 100;
const operationSigns = ['+', '-', '*'];

const operations = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomInt(min, max);
  const randomNumber2 = getRandomInt(min, max);
  const randomOperationSign = operationSigns[getRandomInt(0, operationSigns.length - 1)];
  const correctAnswer = operations(randomNumber1, randomNumber2, randomOperationSign);
  const question = `${randomNumber1} ${randomOperationSign} ${randomNumber2} --> `;
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);



