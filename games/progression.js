/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable space-in-parens */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import getRandomInt from '../src/generateRandomNumb.js';
import startGame from '../src/index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (number, step) => {
    const progression = [];
    for ( let i = 0; i < progressionLength; i += 1) { 
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