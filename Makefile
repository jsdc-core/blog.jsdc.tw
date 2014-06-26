CPN := component
UGLIFY := uglifyjs

build:
	@$(CPN) build -s jsdc -o ./build -b 'last 2 versions'

watch:
	@$(CPN) build -w -s jsdc -o ./build -b 'last 2 versions'

jekyll:
	@jekyll server -w

.PHONY: build clean test
