import getPlain from './plain.js';
import getStylish from './stylish.js';

const getFormat = (tree, format = 'stylish') => {
  if (format === 'plain') {
    return getPlain(tree);
  }
  if (format === 'json') {
    return JSON.stringify(tree);
  }
  return getStylish(tree);
};

export default getFormat;
