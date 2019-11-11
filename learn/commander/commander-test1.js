var program = require('commander');
console.log("commander-test");
program
    /**command 最高层命令指定子命令*/
    .command('rm <dir>')
    .option('-r, --recursive', 'Remove recursively')
    .action(function (dir, cmd) {
        console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
    })
    .command("temp", "temp")
    .parse(process.argv);








