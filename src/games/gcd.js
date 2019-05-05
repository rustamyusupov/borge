import getRandomInt from '../utils/getRandomInt';
import { ROUNDS_COUNT } from '../utils/constants';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default [...new Array(ROUNDS_COUNT)].map(() => {
  const a = getRandomInt();
  const b = getRandomInt();
  const res = gcd(a, b);

  return [`${a} ${b}`, `${res}`];
});
