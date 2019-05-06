import getRandomInt from '../utils/getRandomInt';

const maxRandomNumber = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const a = getRandomInt(maxRandomNumber);
  const b = getRandomInt(maxRandomNumber);
  const res = gcd(a, b);
  const question = `${a} ${b}`;
  const answer = `${res}`;

  return [question, answer];
};
