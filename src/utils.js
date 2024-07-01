#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

export const getFullPath = (filepath) => path.resolve(process.cwd(filepath), filepath);
export const getExtension = (filepath) => path.extname(filepath).slice(1);
export const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getExtension(filepath));

