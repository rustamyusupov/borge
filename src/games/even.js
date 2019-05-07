import getRandomInt from '../utils';
import gameEngine from '..';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';
const maxRandomNumber = 100;

const isEven = value => value % 2 === 0;

const quiz = () => {
  const question = getRandomInt(0, maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameEngine(gameRule, quiz);
