import getRandomInt from '../utils';

const maxRandomNumber = 100;

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
  const question = getRandomInt(0, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
