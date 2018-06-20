import bodyparser from 'koa-bodyparser'
import staticMid from 'koa-static'
import logger from 'koa-logger'
import {
  resolve
} from 'path';
export default app => {
  app.use(bodyparser())
  app.use(staticMid(resolve(__dirname, '../../static')))
  app.use(logger())
}