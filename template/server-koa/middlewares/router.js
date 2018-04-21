import RouterMapping from '../lib/routes';
export default app => {
  new RouterMapping(app).init();
}