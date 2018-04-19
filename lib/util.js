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

async function generatorProject({name, pkg,templatePath}) {
  const userRootPath = resolve(process.cwd(), `./${name}`);
  console.log('用户路径为：', userRootPath);
  if (existsSync(userRootPath)) {
    console.log('文件夹已存在！');
    return;
  }
  mkdirSync(userRootPath);
  copyDirs(templatePath, userRootPath);
  writeFileSync(resolve(userRootPath, `./package.json`), JSON.stringify(pkg), {encoding: 'utf-8'});
}

module.exports = {
  copyFile,
  copyDirs,
  generatorProject
}