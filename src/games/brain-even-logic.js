import { questionModule } from '../cli.js'

export function brainEven() {
    function everOrOdd(rNum) {
      if (rNum % 2 === 0) {
        return 'yes';
      }
      return 'no';
    }
    const rNum = Math.floor(Math.random() * 10);
    const answer = questionModule(rNum, everOrOdd(rNum));
    return answer;
  }