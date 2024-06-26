install: # установка зависимостей
	npm ci

test: # запуск тестов
	npm test

lint: # запуск линтера
	npx eslint .

# перед этим использовать npm link
publish: #отладка публикации
	npm publish --dry-run

test-coverage: # покрытие тестами
	npm test -- --coverage --coverageProvider=v8