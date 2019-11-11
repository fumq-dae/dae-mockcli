#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const inquirer = require('inquirer');
const { updateFile } = require('../lib/file');
const { install } = require('../lib/install');
const fs = require('fs');
const symbols = require('log-symbols');
const chalk = require('chalk');
const prompt = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'author',
      message: '请输入作者的名称'
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入项目描述'
    },
    {
      type: 'confirm',
      name: 'isOk',
      message: '请确定您的输入'
    }
  ])
};

program.version(require('../package.json').version, '-v, --version');

program
  .command('new <ProjectName>')
  .option('-w, --watch [watch]', '是否动态监测目录')
  .option('-p, --port [port]', '服务端口')
  .description('创建一个新项目')
  .action((projectName, options) => {
    if (fs.existsSync(projectName)) {
      console.log(symbols.error, chalk.red('项目已存在'));
      return;
    }
    prompt().then(async (results) => {
      console.log(results)
      const { author,description, isOk } = results;
      if (!isOk) {
        return;
      }
      // 1. clone项目
      const { clone } = require('../lib/download');
      console.log('创建项目: ' + projectName);
      await clone('github.com:fumq-dae/mock', projectName);
      console.log(`项目${projectName}创建成功`);

      // 2. 更新package.json的配置和config.json.
      const packageJson = path.join(path.resolve(projectName), 'package.json');
      updateFile(packageJson, {
        name: projectName,
        author,
        description
      });
      const configJson = path.join(path.resolve(projectName), 'config.json');
      updateFile(configJson, {
        port: options.port || 3000,
        watch: (options.watch || 'true').toLocaleLowerCase()
      });

      // 3. 安装依赖
      console.log('安装依赖...');
      // 将node工作目录更改成构建的项目根目录下
      const projectPath = path.resolve(projectName);
      process.chdir(projectPath);
      // 执行安装命令
      install();
    });
  })
program
  .command('run')
  .description('启动服务')
  .action((cmd, options) => {
    require("../lib/run.js");
  }
  );


program.parse(process.argv)
