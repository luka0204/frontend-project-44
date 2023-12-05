install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

lint:
	npx eslint	.

lint-fix:
	npx eslint . --fix
	
publish:
	npm publish --dry-run

.PHONY: test

brain-games: 
	node bin/brain-games.js