install:
	npm ci

lint: 
	npx eslint .

 #перед этим использовать npm link
publish: #отладка публикации
	npm publish --dry-run
