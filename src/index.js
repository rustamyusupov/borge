import readlineSync from 'readline-sync';

const roundsCount = 3;

const prompt = question => readlineSync.question(`${question} `);

const greetingUser = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const userName = prompt('May I have your name?');
  console.log(`Hello, ${userName}\n`);

  return userName;
};

const flow = (generator) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generator();

    console.log(`Question: ${question}`);

    const answer = prompt('Your answer:');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);

      return false;
    }

    console.log('Correct!');
  }

  return true;
};

const showResult = (userName, result) => console.log(`${result ? 'Congratulations' : "Let's try again"}, ${userName}!`);

export default (rule, generator) => {
  const userName = greetingUser(rule);
  const result = flow(generator);

  showResult(userName, result);
};
