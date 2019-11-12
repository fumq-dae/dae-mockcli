const which = require('which');
const chalk = require('chalk');
const symbols = require('log-symbols');
const { exec, findNpm, findEnv } = require('./exec');

/**
 * 执行npm install命令, 安装项目依赖.这里可以优化为同步执行
 */
const install = () => {
  let success = () => {
    console.log(symbols.success, chalk.green('项目初始化完成'));
    process.exit(0);
  }
  const npm = findNpm();
  exec(which.sync(npm), ['install'], function () {
    try {
      findEnv("nodemon");
      success();
    } catch (ex) {
      console.log("正在安装nodemon...");
      exec(which.sync(npm), ['install','-g','nodemon'], function () {
        success();
      });
    }

  });
};

module.exports = {
  install
};
