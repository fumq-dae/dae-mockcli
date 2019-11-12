const which = require('which');
const { exec, findEnv } = require('./exec');
const fs = require('fs');
const chalk = require('chalk');
const symbols = require('log-symbols');

const startFile = "server.js";
fs.exists(startFile, (exist) => {
  if (exist) {
    const e = findEnv("nodemon");
    exec(which.sync(e), [startFile], function () {
    });
  } else {
    console.log(symbols.error,chalk.red('这不是mock系统，请确定目录是否正确？'));
  }
});
