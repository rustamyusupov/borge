import readlineSync from 'readline-sync';

const prompt = question => readlineSync.question(`${question} `);

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const isEven = value => value % 2 === 0;

export { prompt, getRandomInt, isEven };
