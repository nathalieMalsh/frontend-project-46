import _ from 'lodash';

const data = {
  added: '+ ',
  deleted: '- ',
  space: '  ',
};

const getIndent = (depth, symbol = '') => {
  const space = ' ';
  const spaceCount = 4;
  const indentSize = depth * spaceCount - symbol.length;
  return `${space.repeat(indentSize)}${symbol}`;
};

const stringify = (value, depth) => {
  const getString = (currentValue, lvl) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const lines = Object.entries(currentValue)
      .map(([key, val]) => `${getIndent(lvl + 1, data.space)}${key}: ${getString(val, lvl + 1)}`);
    return ['{', ...lines, `${getIndent(lvl)}}`].join('\n');
  };

  return getString(value, depth);
};

const getStylish = (tree) => {
  const getStylizedObject = (objects, depth) => {
    const result = objects.map((object) => {
      if (object.action === 'nested') {
        return `${getIndent(depth, data.space)}${object.key}: ${getStylizedObject(object.children, depth + 1)}`;
      }
      if (object.action === 'added') {
        return `${getIndent(depth, data.added)}${object.key}: ${stringify(object.newValue, depth)}`;
      }
      if (object.action === 'deleted') {
        return `${getIndent(depth, data.deleted)}${object.key}: ${stringify(object.oldValue, depth)}`;
      }
      if (object.action === 'changed') {
        return `${getIndent(depth, data.deleted)}${object.key}: ${stringify(object.oldValue, depth)}\n${getIndent(depth, data.added)}${object.key}: ${stringify(object.newValue, depth)}`;
      }
      return `${getIndent(depth, data.space)}${object.key}: ${stringify(object.oldValue, depth)}`;
    });
    return ['{', ...result, `${getIndent(depth - 1, '')}}`].join('\n');
  };
  return getStylizedObject(tree, 1);
};

export default getStylish;
