import { name, questionModule } from '../src/cli.js';

name();
let point = 0;
console.log('What number is missing in the progression?');
for (let i = 0; i <= 2; i += 1) {

  const rNum2 = rng(1, 9);
  const rNum3 = rng(1, 5);
  const rNum1 = rng(50, 100);
  const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, j) => (j + 1) * n);
  const randomArray = (arithmeticProgression(rNum2, rNum1));
  const lengthMin = (rng(1, 4));
  const lengthMax = (lengthMin + 10);
  const slicedArray = randomArray.slice(lengthMin, lengthMax);
  const randomNumInArray1 = (slicedArray.length - rNum3);
  const missingNumber = slicedArray[randomNumInArray1];
  console.log(missingNumber);
  const indexNum = slicedArray.indexOf(missingNumber);
  slicedArray[indexNum] = '..';
  const expression = (`Question: ${slicedArray.join(' ')}`);

  const answer = questionModule(expression, missingNumber, 'num');
  if (answer === true) {
    point += 1;
  } else {
    break;
  }
}
if (point === 3) {
  console.log(`Congratulations, ${name}!`);
}

//   let question = readlineSync.question('Your answer: ');
//   question = Number(question);
//   if (question === missingNumber) {
//     console.log('Correct!');
//     point += 1;
//   } else {
//     console.log(`'${question}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
//   if (point === 3) {
//     console.log(`Congratulations, ${name}!`);
//   }
// }
