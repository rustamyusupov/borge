import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const operations = ['+', '-', '*'];
const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomChoise = (choices) => {
  const index = getRandomInt(choices.length);

  return choices[index];
};

export default () => {
  const a = getRandomInt(MAX_RANDOM_NUMBER);
  const b = getRandomInt(MAX_RANDOM_NUMBER);
  const operation = getRandomChoise(operations);
  const res = math[operation](a, b);
  const question = `${a} ${operation} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};
