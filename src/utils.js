#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtension = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getExtension(filepath));

export {
  getFullPath,
  getExtension,
  getData,
};
