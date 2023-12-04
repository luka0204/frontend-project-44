import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
import
{ name } from '../src/cli.js';

console.log(name);

console.log('Welcome to the Brain Games!');

for (let i = 0; i <= 2; i += 1) {
  const rNum = Math.floor(Math.random() * 10);
  console.log(rNum);
  const question = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line eqeqeq
  if ((rNum % 2 == 0 || question == 'yes') && (rNum % 2 != 0 || question == 'no')) {
    console.log('Correct!');
  // eslint-disable-next-line no-dupe-else-if, eqeqeq
  } else if ((rNum % 2 != 0 || question == 'no') && (rNum % 2 == 0 || question == 'yes')) {
    console.log('Incorrect');
  }
}
