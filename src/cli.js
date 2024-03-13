import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line import/prefer-default-export
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export default function questionModule (answer, correctAnswer) {
        console.log(`Question: ${answer}`);
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
