
build: components index.js
				@component build --dev

dist: components
				@component build --standalone Oz --name oz-bundle --out dist
				@uglifyjs dist/oz-bundle.js -o dist/oz-bundle.min.js

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean oz-bundle test
