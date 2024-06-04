#!/usr/bin/env node
import { getFullPath, getData } from "./utils.js";
//import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  
  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);
  
  const keys = Object.keys({ ...data1, ...data2 }).sort();
  const result = [];
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result.push(`+ ${key}: ${data2[key]}`); //added
    } else if (!Object.hasOwn(data2, key)) {
      result.push(`- ${key}: ${data1[key]}`); //deleted
    } else if (data1[key] !== data2[key]) {
      result.push(`- ${key}: ${data1[key]}`); //changed
      result.push(`+ ${key}: ${data2[key]}`);
    } else {
      result.push(`  ${key}: ${data1[key]}`); //unchanged
    }
  };
  console.log(result.join('\n'));
};

export default genDiff;