import readlineSync from 'readline-sync';

export const rng = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export function questionModule(answer, correctAnswer, numOrStr = 'str') {
  console.log(`Question: ${answer}`);
  if (numOrStr === 'num') {
    const question = readlineSync.question('Your answer: ');
    if (Number(question) === correctAnswer) {
      console.log('Correct!');
      return (true);
    }
    console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return (false);
  }
  const question = readlineSync.question('Your answer: ');
  if (question === correctAnswer) {
    console.log('Correct!');
    return (true);
  }
  console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return (false);
}
export function roundGen(game) {
  let point = 0;
  for (let i = 0; i <= 2; i += 1) {
    if (game() === true) {
      point += 1;
    } else {
      break;
    }
    if (point === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
