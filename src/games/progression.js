import getRandomInt from '../utils/getRandomInt';
import { MAX_RANDOM_NUMBER } from '../utils/constants';

const SEQUENCE_LENGTH = 10;

const getProgression = (a1, d) => [...new Array(SEQUENCE_LENGTH)].map((_, idx) => a1 + (idx + 1 - 1) * d);

export default () => {
  const a1 = getRandomInt(MAX_RANDOM_NUMBER);
  const step = getRandomInt(MAX_RANDOM_NUMBER);
  const progression = getProgression(a1, step);
  const elPos = getRandomInt(SEQUENCE_LENGTH);
  const res = progression[elPos];

  progression[elPos] = '..';

  const sequence = progression.join(' ');

  return [sequence, `${res}`];
};
