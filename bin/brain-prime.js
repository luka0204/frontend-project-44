#!/usr/bin/env node
import { roundGen } from '../src/cli.js';
import brainPrime from '../src/games/brain-prime-logic.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
roundGen(brainPrime);
