import getRandomInt from '../utils';
import gameEngine from '..';

const gameRule = 'What number is missing in the progression?';
const maxRandomNumber = 100;
const sequenceLength = 10;

const getProgression = (a1, d) => [...new Array(sequenceLength)].map(
  (_, idx) => a1 + (idx + 1 - 1) * d,
);

const quiz = () => {
  const a1 = getRandomInt(0, maxRandomNumber);
  const step = getRandomInt(0, maxRandomNumber);
  const progression = getProgression(a1, step);
  const elPos = getRandomInt(0, sequenceLength);
  const result = progression[elPos];

  progression[elPos] = '..';

  const question = progression.join(' ');
  const answer = `${result}`;

  return [question, answer];
};

export default () => gameEngine(gameRule, quiz);
