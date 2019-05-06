import getRandomInt from '../utils';

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

export default () => {
  const a = getRandomInt(0, maxRandomNumber);
  const b = getRandomInt(0, maxRandomNumber);
  const operation = getRandomChoise(operations);
  const res = math[operation](a, b);
  const question = `${a} ${operation} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};
