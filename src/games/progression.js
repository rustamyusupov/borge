import getRandomInt from '../utils';

const maxRandomNumber = 100;
const sequenceLength = 10;

const getProgression = (a1, d) => [...new Array(sequenceLength)].map((_, idx) => a1 + (idx + 1 - 1) * d);

export default () => {
  const a1 = getRandomInt(0, maxRandomNumber);
  const step = getRandomInt(0, maxRandomNumber);
  const progression = getProgression(a1, step);
  const elPos = getRandomInt(0, sequenceLength);
  const res = progression[elPos];

  progression[elPos] = '..';

  const question = progression.join(' ');
  const answer = `${res}`;

  return [question, answer];
};
