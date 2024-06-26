### Hexlet tests and linter status:
[![Actions Status](https://github.com/nathalieMalsh/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nathalieMalsh/frontend-project-46/actions)

[![Actions Status](https://github.com/nathalieMalsh/frontend-project-46/actions/workflows/my-check.yml/badge.svg)](https://github.com/nathalieMalsh/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/5c520531dc068f520fc1/maintainability)](https://codeclimate.com/github/nathalieMalsh/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/5c520531dc068f520fc1/test_coverage)](https://codeclimate.com/github/nathalieMalsh/frontend-project-46/test_coverage)

# Gendiff

This is a training project provided by Hexlet. The project is a simple cli utility to find the differences betweeen two configuration files. For now it works with .json, .yml/.yaml config files. The utility can present diffrences in different output formats: 'stylish', 'plain' and 'json'.

## Installing dependencies

```sh
make install
```
[![asciicast](https://asciinema.org/a/uLfqPnauxwuujzijbggARLeVz.svg)](https://asciinema.org/a/uLfqPnauxwuujzijbggARLeVz)

## Help output

```sh
gendiff -h
```

[![asciicast](https://asciinema.org/a/8Tdlhw2wWsKYLwbhRVxGWLoj1.svg)](https://asciinema.org/a/8Tdlhw2wWsKYLwbhRVxGWLoj1)

###  Comparing files using stylish output format

```sh
gendiff <filepath1> <filepath2>
```

[![asciicast](https://asciinema.org/a/6xQuHN9VADiVUmny9oTrUaH2R.svg)](https://asciinema.org/a/6xQuHN9VADiVUmny9oTrUaH2R)

### Comparing files using plain output format

```sh
gendiff -f [--format] plain <filepath1> <filepath2>
```

[![asciicast](https://asciinema.org/a/OLLe14kVypnMsTpzpoKqE0UEo.svg)](https://asciinema.org/a/OLLe14kVypnMsTpzpoKqE0UEo)

### Comparing files using json output format

```sh
gendiff -f [--format] json <filepath1> <filepath2>
```

[![asciicast](https://asciinema.org/a/ZQrDyYIeOvd2kGKDMAeYIdu0m.svg)](https://asciinema.org/a/ZQrDyYIeOvd2kGKDMAeYIdu0m)

### Automatic tests

```sh
make test
```

[![asciicast](https://asciinema.org/a/pd3IqocMffzkQuf8BufGWdmmc.svg)](https://asciinema.org/a/pd3IqocMffzkQuf8BufGWdmmc)
