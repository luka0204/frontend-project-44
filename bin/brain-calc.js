#!/usr/bin/env node
import { brainCalc, roundGen } from '../src/cli.js';

console.log('What is the result of the expression?');
roundGen(brainCalc);
