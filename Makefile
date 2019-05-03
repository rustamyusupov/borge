# Makefile

install:
	npm install

start:
	npx babel-node src/bin/brain-${g}.js

lint:
	npx eslint .

publish:
	npm publish