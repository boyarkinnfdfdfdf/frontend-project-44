/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const game = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const number = getRandomNumber(); 
        const correctAnswer = isEven(number) ? 'yes' : 'no'; 

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return; 
        }
        console.log('Correct!');
        correctAnswersCount += 1;
}
    console.log(`Congratulations, ${name}!`);
};
export default game;