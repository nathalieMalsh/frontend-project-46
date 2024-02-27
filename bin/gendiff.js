#!/usr/bin/env node

import { program } from 'commander';

program
  .version('output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format');

program.parse();
