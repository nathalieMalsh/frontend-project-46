#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../index.js';

program
  .version('output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(genDiff);

program.parse();
