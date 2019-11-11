var program = require('commander');
console.log("commander-test")
// node learn/commander-test.js 
program
    /** -V */
    //node learn/commander-test.js -V
    .version('0.0.1')
    /** -v|--version*/
    .version('0.0.2', '-v, --version')
    /**解析[options] */
    .option('-d, --debug', 'output extra debugging')
    .option('-p, --peppers', 'Add peppers')
    /**配置选择 */
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .option('-l, --list <items>', 'A list', function (val) {
        return val.split(',');
    }).parse(process.argv)


if (program.debug) { console.log("debug"); }
if (program.peppers) console.log('  - peppers');
console.log('  - %s cheese', program.cheese);
console.log(' list: %j', program.list);








