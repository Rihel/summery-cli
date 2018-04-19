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
        "build:dll": "webpack --config config/webpack.config.dll.js --mode production",
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
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "babel-preset-stage-2": "^6.24.1",
        "babel-runtime": "^6.26.0",
        "clean-webpack-plugin": "^0.1.19",
        "css-loader": "^0.28.11",
        "file-loader": "^1.1.11",
        "html-loader": "^0.5.5",
        "html-webpack-plugin": "^3.2.0",
				"node-sass": "^4.8.3",
				"sass-loader": "^7.0.1",
        "mini-css-extract-plugin": "^0.4.0",
        "postcss-loader": "^2.1.4",
        "style-loader": "^0.20.3",
        "webpack": "^4.5.0",
        "webpack-cli": "^2.0.14",
        "webpack-dev-server": "^3.1.3",
        "webpack-merge": "^4.1.2"
      },
      "dependencies": {
				"lib-flexible": "^0.3.2",
        "axios": "^0.18.0",
        "react": "^16.3.2",
        "react-dom": "^16.3.2",
        "react-redux": "^5.0.7",
        "react-router-dom": "^4.2.2",
        "redux": "^3.7.2"
      }
    },
    template:'client-react',
  })
}