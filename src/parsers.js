import yaml from 'js-yaml';

const parse = (data, extention) => {
  if (extention === 'json') {
    return JSON.parse(data);
  }
  if (extention === 'yaml' || extention === 'yml') {
    return yaml.load(data);
  }
  throw new Error('The file extension is not valid');
};

export default parse;
