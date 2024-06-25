const data = {
  added: 'was added with value:',
  deleted: 'was removed',
  changed: 'was updated. From',
};

const stringify = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (typeof value === 'object') {
    return value === null ? value : '[complex value]';
  }
  return value;
};

const getPlain = (tree) => {
  const getStrings = (objects, path) => {
    const result = objects.map((object) => {
      const fullPath = `${path}${object.key}`;
      if (object.action === 'nested') {
        return getStrings(object.children, `${fullPath}.`);
      }
      if (object.action === 'added') {
        return `Property '${fullPath}' ${data.added} ${stringify(object.newValue)}`;
      }
      if (object.action === 'deleted') {
        return `Property '${fullPath}' ${data.deleted}`;
      }
      if (object.action === 'changed') {
        return `Property '${fullPath}' ${data.changed} ${stringify(object.oldValue)} to ${stringify(object.newValue)}`;
      }
      return '';
    });

    return result.filter((item) => item !== '').join('\n');
  };

  return getStrings(tree, '');
};

export default getPlain;
