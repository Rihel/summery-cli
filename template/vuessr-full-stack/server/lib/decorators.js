import {createLoginError, createErrorByMessage, createErrorByStatusMessage, ResponseStatus} from "./serverResponse";
import {normalPath, merge} from "../util";

/**
 * 路由映射对象
 */
export const routerMap = new Map();

/**
 * 控制器，在所有请求前加入前缀
 * @param {string} prefix 路由前缀
 */
export const Controller = (prefix) => {
  return Inject({prefix});
}

/**
 * 请求映射函数，收集所有的请求路径及控制器
 * @param {{method:string,path:string}} option 请求选项配置
 * @returns {(target:ClassDecorator,property:string,descriptor:PropertyDescriptor):any}
 */
export const RequestMapping = (option) => {
  return (target, property, descriptor) => {
    let controller = descriptor.value;
    option.path = normalPath(option.path);
    routerMap.set({
      ...option,
      target
    }, controller);
    return descriptor;
  }
}

/**
 * get请求装饰器
 * @param {String} path 路径
 */
export const Get = (path) => {
  return RequestMapping({path, method: 'get'})
}

/**
 * post请求装饰器
 * @param {String} path 路径
 */
export const Post = (path) => {
  return RequestMapping({path, method: 'post'})
}

/**
 * 鉴权装饰器
 * @param {ClassDecorator} target 目标类
 * @param {String} methodName 方法名
 * @param {PropertyDescriptor} descriptor 描述符
 */
export const Auth = (target, methodName, descriptor) => {
  let old = descriptor.value;
  descriptor.value = function (ctx, next) {

  };
  return descriptor;
}

/**
 *  Required({
 *    query:['userId'], /api/aaa?a=1  ===> {a:1}
 *    body:['userId'], //post请求参数  ctx.request.body
 *    params:['userId'] /usre/:userid
 *  })
 */
export const Required = (requiredOption) => {
  return (target, methodName, descriptor) => {
    let old = descriptor.value;
    descriptor.value = async function (ctx, next) {
      let query = ctx.query;
      let params = ctx.params;
      let body = ctx.request.body;
      let err = []; //存储错误信息
      //遍历检查
      for (let key in requiredOption) {
        let flieds = requiredOption[key];
        let objectKeys;
        for (let i = 0; i < flieds.length; i++) {
          let filed = flieds[i];
          /*
            检查数组中的key是否在对象中
          */
          if (key === 'body') {
            objectKeys = Object.keys(body);
            if (!objectKeys.includes(filed)) {
              err.push(filed);
            }
          } else {
            objectKeys = Object.keys(ctx[key]);
            if (!objectKeys.includes(filed)) {
              err.push(filed);
            }
          }
        }
      }
      if (err.length !== 0) {
        return (ctx.body = createErrorByStatusMessage(ResponseStatus.MISS_ARG, `参数：${err.join(',')}缺失`));
      }
      await next();
      return old(...arguments);
    }
    return descriptor;
  }
}

/**
 * 注入属性到构造函数
 * @param properties 属性map
 */
export const Inject = (properties) => {
  return (target, key) => {
    for (const key in properties) {
      const value = properties[key];
      target.prototype[key] = value;
    }
    return target.prototype;
  }
}
