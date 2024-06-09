#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import parse from './parse.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getFormat(filepath));

export {
  getFullPath,
  getFormat,
  getData,
};
