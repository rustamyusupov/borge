import getRandomInt from '../utils/getRandomInt';

const isEven = value => value % 2 === 0;

export default () => {
  const number = getRandomInt();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};
