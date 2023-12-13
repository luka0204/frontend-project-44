import readlineSync from 'readline-sync';
import
{ name } from '../src/cli.js';
let point = 0;
console.log('What number is missing in the progression?')
for (let i = 0; i <= 2; i += 1) {
  const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const rNum2 = randomNumberGen(1, 9);
  const rNum3 = randomNumberGen(1,5);
  const rNum1 = randomNumberGen(50, 100);
  const arithmeticProgression = (n, lim) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
  const randomArray = (arithmeticProgression(rNum2, rNum1));
  const lengthMin = (randomNumberGen(1, 4));
  const lengthMax = (lengthMin + 10);
  const slicedArray = randomArray.slice(lengthMin, lengthMax);
  const randomNumInArray1 = (slicedArray.length - rNum3);
  const missingNumber = slicedArray[randomNumInArray1];
  console.log(`это ответ чтобы самому не считать = ${missingNumber}`);
  const indexNum = slicedArray.indexOf(missingNumber);
  slicedArray[indexNum] = '...';
  console.log(`Question: ${slicedArray}`);
  let question = readlineSync.question('Your answer: ');
  question = Number(question);
  if (question === missingNumber) {
    console.log('Correct!');
    point += 1;
  } else {
console.log(`'${question}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
break;
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}