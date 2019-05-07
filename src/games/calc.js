import getRandomInt from '../utils';
import gameEngine from '..';

const gameRule = 'What is the result of the expression?';
const maxRandomNumber = 100;
const operations = ['+', '-', '*'];
const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomChoise = (choices) => {
  const index = getRandomInt(0, choices.length - 1);

  return choices[index];
};

const quiz = () => {
  const a = getRandomInt(0, maxRandomNumber);
  const b = getRandomInt(0, maxRandomNumber);
  const operation = getRandomChoise(operations);
  const res = math[operation](a, b);
  const question = `${a} ${operation} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};

export default () => gameEngine(gameRule, quiz);
