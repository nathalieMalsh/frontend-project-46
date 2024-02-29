#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js'

program
  .version('output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, format) => {
    console.log(genDiff(filepath1, filepath2, format));
  });

program.parse();
