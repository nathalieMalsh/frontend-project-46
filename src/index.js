#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'path';

const genDiff = (filepath1, filepath2, format) => {
    const workindDir = `${cwd()}`;
    const path1 = path.resolve(workindDir, filepath1);
    const path2 = path.resolve(workindDir, filepath2);

    const file1 = readFileSync(path1);
    const file2 = readFileSync(path2);
    return { file1, file2, format };
};

export default genDiff;