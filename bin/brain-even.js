#!/usr/bin/env node
import readlineSync from 'readline-sync';
import
// eslint-disable-next-line import/no-useless-path-segments
{ name } from '../src/cli.js';
import questionModule from '../src/cli.js';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let point = 0
for (let i = 0; i <= 2; i += 1){
  function everOrOdd(num){
    if (rNum % 2 === 0){
      return 'yes';
    } else {
      return 'no';
    }
    }
const rNum = Math.floor(Math.random() * 10);
const answer = questionModule(rNum,everOrOdd(rNum))
if (answer === true){
  point += 1;
} else {
  break;
}
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }


