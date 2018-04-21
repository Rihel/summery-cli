import session from 'koa-session'
import views from 'koa-views'
import statics from 'koa-static'
import bodyparser from 'koa-bodyparser'

import staticCache from 'koa-static-cache'

import {resolve} from 'path';

export default app => {
  let keys = ['food', '213213'];
  app.keys = keys;
  app.use(session({
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  }, app))
  app.use(bodyparser());
  app.use(statics(resolve(__dirname, '../static')));
  app.use(views(resolve(__dirname, '../views'), {extension: 'pug'}))
}