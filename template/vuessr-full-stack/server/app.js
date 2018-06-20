import Koa from 'koa'
import glob from 'glob'
import {
  Nuxt,
  Builder
} from 'nuxt'
import isDev from '../isDev'
import nuxtConfig from '../nuxt.config'
import {
  resolve
} from 'path';

const nuxtMiddware =async app => {
  const nuxt = new Nuxt(nuxtConfig)
  if (isDev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  })

}


const start = async () => {
  const app = new Koa()

  glob.sync(resolve(__dirname, './middleware/*-middleware.js'))
    .map(require).forEach(fn => fn(app))

  // db()
  // nuxtMiddware(app)
  app.listen(3000)
  console.log(`Server listening on http://127.0.0.1:3000 ...`)
}


start()