#!/usr/bin/env node
import { roundGen } from '../src/cli.js';
import {brainCalc}from '../src/games/brain-calc-logic.js';

console.log('What is the result of the expression?');
roundGen(brainCalc);
