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
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev:server": "./node_modules/.bin/nodemon server/index.js",
        "dev": "cross-env NODE_ENV=development && npm run dev:server",
        "build": "nuxt build",
        "start": "cross-env NODE_ENV=production && npm run dev:server"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.2",
        "json-web-token": "^2.1.3",
        "koa": "^2.5.1",
        "koa-bodyparser": "^4.2.1",
        "koa-jwt": "^3.3.2",
        "koa-logger": "^3.2.0",
        "koa-router": "^7.4.0",
        "koa-static": "^5.0.0",
        "mysql2": "^1.5.3",
        "nuxt": "^1.4.1",
        "sequelize": "^4.37.10",
        "vue-awesome-swiper": "^3.1.3",
        "vue-lazyload": "^1.2.6"
      },
      "devDependencies": {
        "babel-core": "^6.26.3",
        "babel-plugin-add-module-exports": "^0.2.1",
        "babel-plugin-transform-class-properties": "^6.24.1",
        "babel-plugin-transform-decorators-legacy": "^1.3.5",
        "babel-plugin-transform-object-rest-spread": "^6.26.0",
        "babel-polyfill": "^6.26.0",
        "babel-preset-env": "^1.7.0",
        "babel-preset-stage-3": "^6.24.1",
        "cross-env": "^5.2.0",
        "node-sass": "^4.9.0",
        "nodemon": "^1.17.5",
        "nuxt-sass-resources-loader": "^2.0.1",
        "sass-loader": "^7.0.3"
      }
    },    
    template:'vuessr-full-stack'
  })

}