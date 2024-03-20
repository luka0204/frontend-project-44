import { questionModule, rng } from '../cli.js';

export default function brainProgression() {
  console.log('What number is missing in the progression?');
  const rNum2 = rng(1, 9);
  const rNum3 = rng(1, 5);
  const rNum1 = rng(50, 100);
  const progression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, j) => (j + 1) * n);
  const randomArray = (progression(rNum2, rNum1));
  const lengthMin = (rng(1, 4));
  const lengthMax = (lengthMin + 10);
  const slicedArray = randomArray.slice(lengthMin, lengthMax);
  const randomNumInArray1 = (slicedArray.length - rNum3);
  const missingNumber = slicedArray[randomNumInArray1];
  const indexNum = slicedArray.indexOf(missingNumber);
  slicedArray[indexNum] = '..';
  const expression = (`Question: ${slicedArray.join(' ')}`);

  const answer = questionModule(expression, missingNumber, 'num');
  return answer;
}
