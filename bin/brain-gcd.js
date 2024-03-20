#!/usr/bin/env node
import { roundGen } from '../src/cli.js';
import brainGcd from '../src/games/brain-gcd-logic.js';

console.log('Find the greatest common divisor of given numbers.');
roundGen(brainGcd);
