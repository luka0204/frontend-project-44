import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export function questionModule (answer, correctAnswer,numOrStr = 'str') {
        console.log(`Question: ${answer}`);
        if (numOrStr === 'num'){
            const question = readlineSync.question('Your answer: ');
            if(Number(question) === correctAnswer) {
            console.log('Correct!');
            return (true);
            } else {
            console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${name}!`);  
            return (false);
            }
        } else {
    const question = readlineSync.question('Your answer: ');
    if(question === correctAnswer) {
    console.log('Correct!');
    return (true);
    } else {
    console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);  
    return (false);
    }
}
}
export function brainEven(){
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
const answer = questionModule(rNum,everOrOdd(rNum));
if (answer === true){
  point += 1;
} else {
  break;
}
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export function brainCalc(){
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      console.log('What is the result of the expression?');
      const sign = ['+', '-', '*'];
      const rndInt = randomIntFromInterval(0, 2);
      let point = 0;
      for (let i = 0; i <= 2; i += 1) {
        const rNum1 = Math.floor(Math.random() * 10);
        const rNum2 = Math.floor(Math.random() * 10);
        let actualAnswer = 0;
        let expression = ''
      
        switch (sign[rndInt]) {
          case '+':
            expression = (`Question: ${rNum1} + ${rNum2} = `);
            actualAnswer = (rNum1 + rNum2);
            break;
          case '-':
            expression = (`Question: ${rNum1} - ${rNum2} = `);
            actualAnswer = (rNum1 - rNum2);
            break;
          case '*':
            expression = (`Question: ${rNum1} * ${rNum2} = `);
            actualAnswer = (rNum1 * rNum2);
            break;
        }
      const answer = questionModule(expression,actualAnswer,'num') 
      if (answer === true){
        point += 1;
      } else {
        break;
      }
        }
        if (point === 3) {
          console.log(`Congratulations, ${name}!`);
      }
}

export function brainGcd(){
  console.log('Find the greatest common divisor of given numbers.');
let point = 0;
for (let i = 0; i <= 2; i += 1) {
  const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const rNum1 = randomNumberGen(1, 100);
  const rNum2 = randomNumberGen(1, 100);
  let hcf;
  for (let h = 1; h <= rNum1 && h <= rNum2; h++) {
    if (rNum1 % h === 0 && rNum2 % h === 0) {
      hcf = h;
    }
  }
 let expression = (`Question: ${rNum1} ${rNum2}`);
  const answer = questionModule(expression,hcf,'num') 
      if (answer === true){
        point += 1;
      } else {
        break;
      }
        }
        if (point === 3) {
          console.log(`Congratulations, ${name}!`);
      }

}