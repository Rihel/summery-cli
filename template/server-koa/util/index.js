import {resolve} from "path";
import {readdirSync} from "fs";

const ops = Object.prototype.toString;

/**
 * 判断数据类型
 * @param {any} data 数据
 * @param {String} t 类型
 * @return {boolean};
 */
export const type = (data, t) => {
  return ops
    .call(data)
    .match(/\[object\s(.+)\]/)[1]
    .toLowerCase() === t;
}

/**
 * 判断是不是对象
 * @param {any} data 数据
 * @return {boolean};
 */
export const isObject = (data) => {
  return type(data, 'object');
}

/**
 * 判断是不是数组
 * @param {any} data 数据
 * @return {boolean}
 */
export const isArray = (data) => {
  return type(data, 'array');
}

/**
 * 合并对象，深拷贝
 * @param {Object} target 目标对象
 * @param {Object[]} args 待合并对象
 * @return {Object};
 */
export const merge = (target, ...args) => {
  args.forEach(object => {
    for (const key in object) {
      const value = object[key];
      if (isObject(value)) {
        target[key] = merge({}, value);
      } else if (isArray(value)) {
        target[key] = merge([], value);
      } else {
        target[key] = value;
      }

    }
  })
  return target;
}

/**
 * 判断是不是一个空对象
 * @param {Object} data 待检查对象
 * @returns {boolean};
 */
export const isEmptyObject = (data) => {
  return Object
    .keys(data)
    .length === 0;
}

/**
 * 补全路径
 * @param {String} path 路径
 * @return {String}
 */
export const normalPath = path => {
  return path.startsWith('/')
    ? path
    : `/${path}`;
}

/**
 * 加载项目根目录下的指定目录的所有js文件，并且返回
 * @param {String} dirName 项目根目录下的目录名
 * @return {Object[]}
 */
export const loadAllScriptFileOnDir = dirName => {
  const dirPath = resolve(process.cwd(), `./${dirName}`);
  const files = readdirSync(dirPath);
  const modules = [];
  files.forEach((fileName) => {
    let filePath = resolve(dirPath, `./${fileName}`);
    if (/\.(js)/.test(filePath)) {
      let chunk = require(filePath);
      modules.push(chunk)
    }
  })
  return modules;
}
