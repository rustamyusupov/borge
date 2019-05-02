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

  if (answer !== 'yes' && answer !== 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes or no'.`);
    console.log(`Let's try again, ${userName}`);

    break;
  }

  if (isEvenNumber && answer === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${userName}`);

    break;
  }

  if (!isEvenNumber && answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${userName}`);

    break;
  }

  console.log('Correct!');

  // eslint-disable-next-line no-plusplus
  attempt++;
}

if (attempt === 3) {
  console.log(`Congratulations, ${userName}!`);
}
