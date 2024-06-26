import yaml from 'js-yaml';

const parse = (data, format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yam: yaml.load,
  };
  const parser = parsers[format];
  return parser(data);
};

export default parse;
