import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../index.js';
import { getExtension } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expectedFile = readFile('expected_file.txt');

  expect(genDiff(path1, path2)).toBe(expectedFile);
});
test('yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  const expectedFile = readFile('expected_file.txt');
  
  expect(genDiff(path1, path2)).toBe(expectedFile);
});
