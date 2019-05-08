import getRandomInt from '../utils';
import gameEngine from '..';

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const quiz = () => {
  const a = getRandomInt(0, maxRandomNumber);
  const b = getRandomInt(0, maxRandomNumber);
  const result = gcd(a, b);
  const question = `${a} ${b}`;
  const answer = String(result);

  return [question, answer];
};

export default () => gameEngine(gameRule, quiz);
