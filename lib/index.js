

const {
  mkdirSync,
  existsSync,
  readFileSync,
  createReadStream,
  readdirSync,
  createWriteStream,
  fstatSync,
  statSync,
  openSync,
  writeFileSync
} = require('fs');
const {resolve} = require('path');
const chalk = require('chalk')
const log = console.log;
const jsTemplatePath = resolve(__dirname, '../template/js');
const tsTemplatePath = resolve(__dirname, '../template/ts');

function copyFile(origin, target) {
  console
  return new Promise((resolve, reject) => {
    createReadStream(origin, {encoding: 'utf-8'})
      .pipe(createWriteStream(target))
      .on('close', () => {
        resolve();
      });
  })

}

/**
 * 拷贝文件到用户位置
 * @param {string} root 文件夹根目录路径
 * @param {string} targetRoot 目标文件夹路径
 */
async function generatorDirs(root, targetRoot) {
  let files = readdirSync(root);
  // console.log(files);
  for (let i = 0; i < files.length; i++) {
    const originPath = resolve(root, `./${files[i]}`);
    const targetPath = resolve(targetRoot, `./${files[i]}`);
    const stat = statSync(originPath);
    if (stat.isDirectory()) {
      //递归调用
      mkdirSync(targetPath);
      generatorDirs(originPath, targetPath);
    } else {
     await copyFile(originPath,targetPath);
    }
  }

}

async function generatorJsTemplate(name) {
  let pkg = {
    "name": name,
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "dev": "node_modules/.bin/nodemon start.js"
    },
    "devDependencies": {
      "babel-core": "^6.26.0",
      "babel-plugin-transform-class-properties": "^6.24.1",
      "babel-plugin-transform-decorators-legacy": "^1.3.4",
      "babel-plugin-transform-object-rest-spread": "^6.26.0",
      "babel-polyfill": "^6.26.0",
      "babel-preset-env": "^1.6.1",
      "babel-preset-stage-3": "^6.24.1",
      "nodemon": "^1.17.3",
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "summery": "*",
      "pug": "^2.0.0-rc.4",
    }
  }
  const userRootPath = resolve(process.cwd(), `./${name}`);
  console.log('用户路径为：',userRootPath);
  if(existsSync(userRootPath)){
    console.log('文件夹已存在！');
    return;
  }
  mkdirSync(userRootPath);
  generatorDirs(jsTemplatePath,userRootPath);
  writeFileSync(resolve(userRootPath,`./package.json`),JSON.stringify(pkg),{
    encoding:'utf-8'
  });

}
async function genteratorTsTemplate(name) {
  console.log('使用Ts创建模板！', name)
}

module.exports = ({useTypescript, projectName}) => {
  if (useTypescript) {
    genteratorTsTemplate(projectName);
  } else {
    generatorJsTemplate(projectName);
  }

  log(chalk.green('项目创建完毕！键入下列命令！'));
  log(chalk.yellow(`cd ${projectName}\n`));
  log(chalk.yellow('npm install\n'));
  log(chalk.yellow('npm run dev\n\n'));
  log(chalk.magenta('使用浏览器打开： http://localhost:3000\n\n\n'))
}