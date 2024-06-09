install: # установка зависимостей
	npm ci

lint: # запуск линтера
	npx eslint .

# перед этим использовать npm link
publish: #отладка публикации
	npm publish --dry-run
