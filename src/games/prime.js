import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

export default () => {
  const num = getRandomInt(MAX_RANDOM_NUMBER);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [num, answer];
};
