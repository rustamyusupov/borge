import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const isEven = value => value % 2 === 0;

export default () => {
  const question = getRandomInt(MAX_RANDOM_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};
