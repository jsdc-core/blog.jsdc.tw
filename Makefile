CPN := node_modules/.bin/component
UGLIFY := uglifyjs

build:
	@$(CPN) build -s jsdc -o ./build -b 'last 2 versions'

watch:
	@$(CPN) build -w -s jsdc -o ./build -b 'last 2 versions'

release:
	@$(CPN) build -c -s jsdc -o ./build -b 'last 2 versions'

.PHONY: build clean test
