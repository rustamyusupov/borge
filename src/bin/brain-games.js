#!/usr/bin/env node
import { prompt } from '..';

console.log('Welcome to the Brain Games!\n');

const userName = prompt('May I have your name?');

console.log(`Hello, ${userName}`);
