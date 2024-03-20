import { questionModule,rng } from '../cli.js'

export function brainPrime(number) {
    const rNum1 = rng(1, 100);
    const expression = (rNum1);
    let isPrime = true;
    if (number > 1) {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        return 'yes';
      }
      return 'no';
    }
    const answer = questionModule(expression, brainPrime(rNum1));
    return answer;
  }