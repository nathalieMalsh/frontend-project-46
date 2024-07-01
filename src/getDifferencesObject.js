import _ from 'lodash';

const getDifferencesObject = (object1, object2) => {
  const keys = _.sortBy(Object.keys({ ...object1, ...object2 }));

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

export default getDifferencesObject;
