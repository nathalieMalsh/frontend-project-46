#!/usr/bin/env node

import gendiff from "../index.js";
import { program } from 'commander';


program
  .version('output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepat1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(gendiff);
  
program.parse();