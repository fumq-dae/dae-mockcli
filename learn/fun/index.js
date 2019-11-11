#!/usr/bin/env node
//-------------------------------------inquirer
const inquirer = require('inquirer');

inquirer.prompt([
    // 输入类型
    {
      type: 'input',
      name: 'author',
      message: 'Please input the author name.'
    },
    // 确认类型.
    {
      type: 'confirm',
      name: 'continune',
      message: 'Is that ok?'
    }
  ]).then(result => {
    // 输出: {author, continune}的实际的值.    
    console.log(result);
  });

  //----------------------------------------ora
  const ora = require('ora');
 
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
    spinner.stop();
}, 5000);
//-----------------------------------------chalk
const chalk = require('chalk')
console.log(chalk.red('some error'))