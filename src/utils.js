#!/usr/bin/env node
import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

const getFullPath = (filepath) => path.resolve(process.cwd(filepath), '__fixtures__', filepath);
const getExtension = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getExtension(filepath));

const getDifferencesObject = (object1, object2) => {
  const keys = Object.keys({ ...object1, ...object2 }).sort();

  return keys.map((key) => {
    const oldValue = object1[key];
    const newValue = object2[key];

    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return {
        action: 'nested',
        key,
        children: getDifferencesObject(oldValue, newValue),
      };
    }

    if (!_.has(object1, key)) {
      return {
        action: 'added',
        key,
        newValue,
      };
    }

    if (!_.has(object2, key)) {
      return {
        action: 'deleted',
        key,
        oldValue,
      };
    }

    if (object1[key] !== object2[key]) {
      return {
        action: 'changed',
        key,
        oldValue,
        newValue,
      };
    }

    return {
      action: 'unchanged',
      key,
      oldValue,
    };
  });
};

export {
  getFullPath,
  getExtension,
  getData,
  getDifferencesObject,
};
