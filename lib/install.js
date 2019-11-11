const which = require('which');
const chalk = require('chalk');
const symbols = require('log-symbols');
const { exec, findNpm } = require('./exec');

/**
 * 执行npm install命令, 安装项目依赖.
 */
const install = () => {
  const npm = findNpm();
  exec(which.sync(npm), ['install'], function () {
    console.log(symbols.success, chalk.green('项目初始化完成'));
    process.exit(0);
  });
};

module.exports = {
  install
};
