import getRandomInt from '../utils';

const maxRandomNumber = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const a = getRandomInt(0, maxRandomNumber);
  const b = getRandomInt(0, maxRandomNumber);
  const res = gcd(a, b);
  const question = `${a} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};
