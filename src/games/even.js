import getRandomInt from '../utils/getRandomInt';

const maxRandomNumber = 100;

const isEven = value => value % 2 === 0;

export default () => {
  const question = getRandomInt(maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};
