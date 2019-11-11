* Commander.js node.js命令行界面的完整解决方案；

### option
* -abc相当于-a -b -c；
* --template-engine变成骆驼式的program.templateEngine；
* --no前缀取反，如--no-sauce将program.sauce的值设置为false;
* 尖角括号<>（例如<cmd>）表示必需的输入。 方括号（例如[env]）表示可选输入
* Git风格子命令,根据子命令自动引导到以特定格式命名的命令执行文件，文件名的格式是 [command]-[subcommand]，如（index-install，index-search）；
* -h --help自动生成，还可以自定义；
-------------------------------------------
node learn/commander-test.js --debugg
node learn/commander-test.js -dp
node learn/commander-test.js rm /hahah -r
node learn/commander-test.js rm /hahah
node learn/commander-test.js -l a,b
node learn/commander-test.js -h
--------------------------------
* 参考：https://www.cnblogs.com/mirandachen/p/9826886.html
















