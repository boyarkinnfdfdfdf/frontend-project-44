/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
import getRandomInt from '../games/generateRandomNumb.js';
import startGame from '../src/index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (number, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number + (step * i));
  }
  return progression;
};
const generateRound = () => {
  const number = getRandomInt(-10, 10);
  const step = getRandomInt(1, 10);
  const progression = generateProgression(number, step);
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
