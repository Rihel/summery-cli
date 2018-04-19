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
const chalk = require('chalk')
const log = console.log;
const {resolve} = require('path');
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
async function copyDirs(root, targetRoot) {
  let files = readdirSync(root);
  // console.log(files);
  for (let i = 0; i < files.length; i++) {
    const originPath = resolve(root, `./${files[i]}`);
    const targetPath = resolve(targetRoot, `./${files[i]}`);
    const stat = statSync(originPath);
    if (stat.isDirectory()) {
      //递归调用
      mkdirSync(targetPath);
      copyDirs(originPath, targetPath);
    } else {
      await copyFile(originPath, targetPath);
    }
  }

}

async function generatorProject({name, pkg,template}) {
  const userRootPath = resolve(process.cwd(), `./${name}`);
  console.log('用户路径为：', userRootPath);
  if (existsSync(userRootPath)) {
    console.log('文件夹已存在！');
    return;
  }
  mkdirSync(userRootPath);
  copyDirs(resolve(__dirname,`../template/${template}`), userRootPath);
	writeFileSync(resolve(userRootPath, `./package.json`), JSON.stringify(pkg,null,2), {encoding: 'utf-8'});
	

  log(chalk.green('项目创建完毕！键入下列命令！'));
  log(chalk.yellow(`cd ${name}\n`));
  log(chalk.yellow('npm install\n'));
  log(chalk.yellow('npm run dev\n\n'));
  log(chalk.magenta('使用浏览器打开： http://localhost:3000\n\n\n'))
}

module.exports = {
  copyFile,
  copyDirs,
  generatorProject
}