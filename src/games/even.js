import getRandomInt from '../utils/getRandomInt';
import { ROUNDS_COUNT } from '../utils/constants';

const isEven = value => value % 2 === 0;

export default [...new Array(ROUNDS_COUNT)].map(() => {
  const number = getRandomInt();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
});
