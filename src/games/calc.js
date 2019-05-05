import getRandomInt from '../utils/getRandomInt';

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
  const a = getRandomInt();
  const b = getRandomInt();
  const operation = getRandomChoise(['+', '-', '*']);
  const res = math[operation](a, b);

  return [`${a} ${operation} ${b}`, `${res}`];
};
