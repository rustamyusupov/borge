import getRandomInt from '../utils/getRandomInt';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const res = gcd(a, b);

  return [`${a} ${b}`, `${res}`];
};
