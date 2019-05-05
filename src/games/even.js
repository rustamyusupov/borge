import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const isEven = value => value % 2 === 0;

export default () => {
  const number = getRandomInt(MAX_RANDOM_NUMBER);
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};
