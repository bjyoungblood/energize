JSCS = node_modules/.bin/jscs
JSHINT = node_modules/.bin/jshint
WEBPACK = node_modules/webpack/bin/webpack.js
DEVSERVER = node_modules/webpack-dev-server/bin/webpack-dev-server.js

export NODE_ENV = test

.PHONY: build dev lint

build:
	$(WEBPACK) --optimize-minimize --optimize-occurence-order --devtool source-map --verbose --display-chunks --bail

dev:
	NODE_ENV=development $(DEVSERVER) --content-base dist/ --hot --devtool eval-source-map --progress --colors --debug --output-pathinfo

lint:
	$(JSHINT) .
	$(JSCS) -c .jscsrc .

