import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomChoise = (choices) => {
  const index = Math.floor(Math.random() * choices.length);

  return choices[index];
};

export default () => {
  const a = getRandomInt(MAX_RANDOM_NUMBER);
  const b = getRandomInt(MAX_RANDOM_NUMBER);
  const operation = getRandomChoise(['+', '-', '*']);
  const res = math[operation](a, b);

  return [`${a} ${operation} ${b}`, `${res}`];
};
