import { routerMap } from "../lib/decorators";
import { loadAllScriptFileOnDir, normalPath } from "../util";
import Router from 'koa-router'
import Koa from "koa";
/**
 * @class RouterMapping 路由映射器
 */
export default class RouterMapping{
 /**
  * 创建一个路由映射器
  * @param {Koa} app 
  * @memberof RouterMapping
  */
 constructor(app){
    this.app=app;
    this.router=new Router();
  }
 /**
  * 初始化
  * 
  * @memberof RouterMapping
  */
 init(){
    loadAllScriptFileOnDir('controller')
		for (const option of routerMap.keys()) {
			let prefix = option.target.prefix;
      let path = option.path;
			let requestPath = normalPath(prefix+path);
			let controller = routerMap.get(option);
			let method = option.method;
      this.router[method](requestPath,controller);
    }
		this.app.use(this.router.routes())
		.use(this.router.allowedMethods());
	}
}

