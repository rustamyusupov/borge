#!/usr/bin/env node
import { prompt, getRandomInt, isEven } from '..';

const QUESTIONS_COUNT = 3;
const MAX_RANDOM_NUMBER = 100;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = prompt('May I have your name?');
console.log(`Hello, ${userName}\n`);

let attempt = 0;
while (attempt < QUESTIONS_COUNT) {
  const number = getRandomInt(MAX_RANDOM_NUMBER);
  const isEvenNumber = isEven(number);
  console.log(`Question: ${number}`);

  const answer = prompt('Your answer:');
  const isIncorrectAnswer = (answer !== 'yes' && answer !== 'no') || (isEvenNumber && answer === 'no') || (!isEvenNumber && answer === 'yes');

  if (isIncorrectAnswer) {
    const correctAnswer = isEvenNumber ? 'yes' : 'no';

    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    break;
  }

  console.log('Correct!');
  attempt += 1;
}

console.log(`${attempt === 3 ? 'Congratulations' : "Let's try again"}, ${userName}!`);
