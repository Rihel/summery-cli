const {generatorProject} = require('./util');
module.exports = (name) => {
  generatorProject({
    name: name,
    pkg: {
      "name": name,
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
        "koa": "^2.5.0",
        "koa-bodyparser": "^4.2.0",
        "koa-cors": "^0.0.16",
        "koa-router": "^7.4.0",
        "koa-session": "^5.8.1",
        "koa-static": "^4.0.2",
        "koa-static-cache": "^5.1.2",
        "koa-views": "^6.1.4",
        "pug": "^2.0.0-rc.4"
      }
    },
    template:'server-koa'
  })

}