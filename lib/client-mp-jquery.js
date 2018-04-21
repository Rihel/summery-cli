const {generatorProject} = require('./util');
module.exports = (projectName) => {
  generatorProject({
    name: projectName,
    pkg: {
			"name": projectName,
			"version": "1.0.0",
			"description": "",
			"main": "index.js",
			"scripts": {
				"build": "webpack --config config/webpack.config.prod.js --mode production",
				"dev": "webpack-dev-server --inline --progress --config config/webpack.config.dev.js --open --mode development"
			},
			"keywords": [],
			"author": "",
			"license": "ISC",
			"devDependencies": {
				"autoprefixer": "^8.3.0",
				"babel-core": "^6.26.0",
				"babel-loader": "^7.1.4",
				"babel-plugin-transform-class-properties": "^6.24.1",
				"babel-plugin-transform-decorators-legacy": "^1.3.4",
				"babel-plugin-transform-runtime": "^6.23.0",
				"babel-preset-env": "^1.6.1",
				"babel-preset-stage-0": "^6.24.1",
				"babel-preset-stage-2": "^6.24.1",
				"babel-runtime": "^6.26.0",
				"clean-webpack-plugin": "^0.1.19",
				"css-loader": "^0.28.11",
        "file-loader": "^1.1.11",
        "url-loader": "^1.0.1",
				"html-webpack-plugin": "^3.2.0",
				"mini-css-extract-plugin": "^0.4.0",
				"node-sass": "^4.8.3",
				"postcss-loader": "^2.1.4",
				"pug": "^2.0.3",
				"pug-loader": "^2.4.0",
				"sass-loader": "^7.0.1",
				"style-loader": "^0.20.3",
				"webpack": "^4.5.0",
				"webpack-cli": "^2.0.14",
				"webpack-dev-server": "^3.1.3",
				"webpack-merge": "^4.1.2"
			},
			"dependencies": {
				"jquery": "^3.3.1",
				"lib-flexible": "^0.3.2"
			}
		}
		,
    template:'client-mp-jquery',
  })
}