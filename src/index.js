#!/usr/bin/env node

import path from "path";
import fs from "fs";
import parse from './parse.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getFormat(filepath));

const gendiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  
  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);

  console.log(data1);
  console.log(data2);
};

export default gendiff;