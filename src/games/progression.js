import getRandomInt from '../utils/getRandomInt';

const maxRandomNumber = 100;
const sequenceLength = 10;

const getProgression = (a1, d) => [...new Array(sequenceLength)].map((_, idx) => a1 + (idx + 1 - 1) * d);

export default () => {
  const a1 = getRandomInt(maxRandomNumber);
  const step = getRandomInt(maxRandomNumber);
  const progression = getProgression(a1, step);
  const elPos = getRandomInt(sequenceLength);
  const res = progression[elPos];

  progression[elPos] = '..';

  const question = progression.join(' ');
  const answer = `${res}`;

  return [question, answer];
};
