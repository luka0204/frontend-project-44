import { questionModule } from '../cli.js';

export default function brainCalc() {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const sign = ['+', '-', '*'];
  const rndInt = randomIntFromInterval(0, 2);
  const rNum1 = Math.floor(Math.random() * 10);
  const rNum2 = Math.floor(Math.random() * 10);
  let actualAnswer = 0;
  let expression = '';
  // eslint-disable-next-line default-case
  switch (sign[rndInt]) {
    case '+':
      expression = (`${rNum1} + ${rNum2} = `);
      actualAnswer = (rNum1 + rNum2);
      break;
    case '-':
      expression = (`${rNum1} - ${rNum2} = `);
      actualAnswer = (rNum1 - rNum2);
      break;
    case '*':
      expression = (`${rNum1} * ${rNum2} = `);
      actualAnswer = (rNum1 * rNum2);
      break;
  }
  const answer = questionModule(expression, actualAnswer, 'num');
  return answer;
}
