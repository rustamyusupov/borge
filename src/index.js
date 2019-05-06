import readlineSync from 'readline-sync';

const roundsCount = 3;

const prompt = question => readlineSync.question(`${question} `);

const greetingUser = (question) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${question}\n`);

  const userName = prompt('May I have your name?');
  console.log(`Hello, ${userName}\n`);

  return userName;
};

const flow = (quiz = []) => {
  let attempt = 0;

  while (attempt < roundsCount) {
    const question = quiz[attempt][0];
    console.log(`Question: ${question}`);

    const correctAnswer = quiz[attempt][1];
    const answer = prompt('Your answer:');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      break;
    }

    console.log('Correct!');
    attempt += 1;
  }

  return attempt === 3;
};

const showResult = (result, userName) => console.log(`${result ? 'Congratulations' : "Let's try again"}, ${userName}!`);

const run = (question, generator) => {
  const userName = greetingUser(question);
  const quiz = [...new Array(roundsCount)].map(() => generator());
  const result = flow(quiz);

  showResult(result, userName);
};

export default run;
