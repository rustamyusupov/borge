import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');

  return `Hello, ${userName}!`;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export { greetingUser, getRandomInt };
