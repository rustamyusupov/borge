import getRandomInt from '../utils';
import gameEngine from '..';

const maxRandomNumber = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const quiz = () => {
  const a = getRandomInt(0, maxRandomNumber);
  const b = getRandomInt(0, maxRandomNumber);
  const res = gcd(a, b);
  const question = `${a} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};

export default () => {
  gameEngine('Find the greatest common divisor of given numbers.', quiz);
};
