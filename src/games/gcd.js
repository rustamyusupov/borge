import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const a = getRandomInt(MAX_RANDOM_NUMBER);
  const b = getRandomInt(MAX_RANDOM_NUMBER);
  const res = gcd(a, b);

  return [`${a} ${b}`, `${res}`];
};
