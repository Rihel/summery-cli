import RouterMapping from '../lib/routes'

export default app => {
  const routerMappeing = new RouterMapping(app)
  routerMappeing.init()
}