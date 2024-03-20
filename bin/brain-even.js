#!/usr/bin/env node
import { roundGen } from '../src/cli.js';
import brainEven from '../src/games/brain-even-logic.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
roundGen(brainEven);
