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

export function brainCalc() {
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
