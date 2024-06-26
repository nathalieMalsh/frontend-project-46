import yaml from 'js-yaml';

const parse = (data, format) => {
  const parsers = {
    json: JSON.parse(data),
    yaml: yaml.load(data),
    yam: yaml.load(data),
  };
  return parsers[format];
};

export default parse;
