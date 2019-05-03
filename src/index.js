import readlineSync from 'readline-sync';

const prompt = question => readlineSync.question(`${question} `);

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const isEven = value => value % 2 === 0;

const isCorrectAnswer = (number, answer) => {
  const isEvenNumber = isEven(number);

  return (
    (answer === 'yes' || answer === 'no') && ((isEvenNumber && answer === 'yes') || (!isEvenNumber && answer === 'no'))
  );
};

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

export {
  prompt, getRandomInt, isCorrectAnswer, getCorrectAnswer,
};
