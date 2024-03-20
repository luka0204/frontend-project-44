#!/usr/bin/env node
import { brainGcd, roundGen } from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');
roundGen(brainGcd);
