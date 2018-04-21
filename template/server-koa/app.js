import Koa from 'koa';
import { loadAllScriptFileOnDir } from './util';


;(async ()=>{

  const app = new Koa();

  let chunks = loadAllScriptFileOnDir('middlewares');
  chunks.forEach(chunk=>{
    chunk.default(app);
  });

  app.listen(3000,()=>{
    console.log('server is running in 3000 port');
  })

})();

