const c = require('./index');

console.log(c.bold('== Foreground Colors =='));
console.log(c.black('black'));
console.log(c.red('red'));
console.log(c.green('green'));
console.log(c.yellow('yellow'));
console.log(c.blue('blue'));
console.log(c.magenta('magenta'));
console.log(c.cyan('cyan'));
console.log(c.white('white'));

console.log(c.blackBright('blackBright'));
console.log(c.redBright('redBright'));
console.log(c.greenBright('greenBright'));
console.log(c.yellowBright('yellowBright'));
console.log(c.blueBright('blueBright'));
console.log(c.magentaBright('magentaBright'));
console.log(c.cyanBright('cyanBright'));
console.log(c.whiteBright('whiteBright'));
console.log(c.gray('gray alias for blackBright'));
console.log(c.grey('grey alias for blackBright'));

console.log('\n' + c.bold('== Background Colors =='));
console.log(c.bgBlack('bgBlack'));
console.log(c.bgRed('bgRed'));
console.log(c.bgGreen('bgGreen'));
console.log(c.bgYellow('bgYellow'));
console.log(c.bgBlue('bgBlue'));
console.log(c.bgMagenta('bgMagenta'));
console.log(c.bgCyan('bgCyan'));
console.log(c.bgWhite('bgWhite'));

console.log(c.bgBlackBright('bgBlackBright'));
console.log(c.bgRedBright('bgRedBright'));
console.log(c.bgGreenBright('bgGreenBright'));
console.log(c.bgYellowBright('bgYellowBright'));
console.log(c.bgBlueBright('bgBlueBright'));
console.log(c.bgMagentaBright('bgMagentaBright'));
console.log(c.bgCyanBright('bgCyanBright'));
console.log(c.bgWhiteBright('bgWhiteBright'));
console.log(c.bgGray('bgGray alias'));
console.log(c.bgGrey('bgGrey alias'));
