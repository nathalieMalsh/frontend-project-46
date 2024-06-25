import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('Stylish', () => {
  test('json', () => {
    const path1 = getFixturePath('file1.json');
    const path2 = getFixturePath('file2.json');
    const expectedFile = readFile('expected_file_stylish.txt');
    expect(genDiff(path1, path2, 'stylish')).toBe(expectedFile);
  });
  test('yaml', () => {
    const path1 = getFixturePath('file1.yaml');
    const path2 = getFixturePath('file2.yaml');
    const expectedFile = readFile('expected_file_stylish.txt');
    expect(genDiff(path1, path2, 'stylish')).toBe(expectedFile);
  });
});

describe('Plain', () => {
  test('json', () => {
    const path1 = getFixturePath('file1.json');
    const path2 = getFixturePath('file2.json');
    const expectedFile = readFile('expected_file_plain.txt');
    expect(genDiff(path1, path2, 'plain')).toBe(expectedFile);
  });
  test('yaml', () => {
    const path1 = getFixturePath('file1.yaml');
    const path2 = getFixturePath('file2.yaml');
    const expectedFile = readFile('expected_file_plain.txt');
    expect(genDiff(path1, path2, 'plain')).toBe(expectedFile);
  });
});

describe('JSON', () => {
  test('json', () => {
    const path1 = getFixturePath('file1.json');
    const path2 = getFixturePath('file2.json');
    const expectedFile = readFile('expected_file_json.txt');
    expect(genDiff(path1, path2, 'json')).toBe(expectedFile);
  });
  test('yaml', () => {
    const path1 = getFixturePath('file1.yaml');
    const path2 = getFixturePath('file2.yaml');
    const expectedFile = readFile('expected_file_json.txt');
    expect(genDiff(path1, path2, 'json')).toBe(expectedFile);
  });
});
