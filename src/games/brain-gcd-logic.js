import { questionModule } from '../cli.js'

export function brainGcd() {
    const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const rNum1 = randomNumberGen(1, 100);
    const rNum2 = randomNumberGen(1, 100);
    let hcf;
    for (let h = 1; h <= rNum1 && h <= rNum2; h += 1) {
      if (rNum1 % h === 0 && rNum2 % h === 0) {
        hcf = h;
      }
    }
    const expression = (`${rNum1} ${rNum2}`);
    const answer = questionModule(expression, hcf, 'num');
    return answer;
  }