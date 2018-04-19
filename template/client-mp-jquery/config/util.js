const {resolve} = require('path');
const  merge = require('webpack-merge');
const r = (...args) => {
  return resolve(...args)
}
const rootPath = r(__dirname, '../');
const projectPath = r(__dirname, '../src');
const buildPath = r(__dirname, '../dist');



module.exports = {
  r,
  rootPath,
  projectPath,
  buildPath,
  merge
}