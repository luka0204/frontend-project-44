#!/usr/bin/env node
import { roundGen } from '../src/cli.js';
import brainProgression from '../src/games/brain-progression-logic.js';

roundGen(brainProgression);
