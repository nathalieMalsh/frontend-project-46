import { getFullPath, getData, getDifferencesObject } from './utils.js';
import getFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);
  const result = getDifferencesObject(data1, data2);
  return getFormat(result, format);
};

export default genDiff;
