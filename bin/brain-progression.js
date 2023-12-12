import readlineSync from 'readline-sync';
import
{ name } from '../src/cli.js';

const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const rNum2 = randomNumberGen(1, 9);
const rNum1 = randomNumberGen(50, 100);
const arithmeticProgression = (n, lim) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);
const randomArray = (arithmeticProgression(rNum2, rNum1));
console.log(`random array = ${randomArray}`);
const lengthMin = (randomNumberGen(1, 4));
const lengthMax = (lengthMin + 10);
const slicedArray = randomArray.slice(lengthMin, lengthMax);
console.log(`sliced array =  ${slicedArray}`);

const randomNumInArray1 = (slicedArray.length - rNum2);
const missingNumber = slicedArray[randomNumInArray1];
console.log(missingNumber);
const indexNum = slicedArray.indexOf(missingNumber);
slicedArray[indexNum] = '...';
console.log(`array with missing number = ${slicedArray}`);
