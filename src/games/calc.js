import getRandomInt from '../utils/getRandomInt';

const maxRandomNumber = 100;
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
  const a = getRandomInt(maxRandomNumber);
  const b = getRandomInt(maxRandomNumber);
  const operation = getRandomChoise(operations);
  const res = math[operation](a, b);
  const question = `${a} ${operation} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};
