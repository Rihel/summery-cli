
const {resolve} = require('path');
const chalk = require('chalk')
const log = console.log;
const jsTemplatePath = resolve(__dirname, '../template/js');
const {generatorProject} = require('./util');

module.exports = ({useTypescript, projectName}) => {
  generatorProject({
    name: projectName,
    pkg: {
      "name": projectName,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev": "node_modules/.bin/nodemon start.js"
      },
      "devDependencies": {
        "babel-core": "^6.26.0",
        "babel-plugin-transform-class-properties": "^6.24.1",
        "babel-plugin-transform-decorators-legacy": "^1.3.4",
        "babel-plugin-transform-object-rest-spread": "^6.26.0",
        "babel-polyfill": "^6.26.0",
        "babel-preset-env": "^1.6.1",
        "babel-preset-stage-3": "^6.24.1",
        "nodemon": "^1.17.3"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "summery": "*",
        "pug": "^2.0.0-rc.4"
      }
    },
    templatePath:jsTemplatePath
  })

  log(chalk.green('项目创建完毕！键入下列命令！'));
  log(chalk.yellow(`cd ${projectName}\n`));
  log(chalk.yellow('npm install\n'));
  log(chalk.yellow('npm run dev\n\n'));
  log(chalk.magenta('使用浏览器打开： http://localhost:3000\n\n\n'))
}