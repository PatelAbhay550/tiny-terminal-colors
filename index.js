const codes = {
  // Resets
  reset: "\x1b[0m",

  // Styles
  bold: "\x1b[1m",
  underline: "\x1b[4m",

  // Foreground colors
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",

  // Bright foregrounds
  blackBright: "\x1b[90m",
  redBright: "\x1b[91m",
  greenBright: "\x1b[92m",
  yellowBright: "\x1b[93m",
  blueBright: "\x1b[94m",
  magentaBright: "\x1b[95m",
  cyanBright: "\x1b[96m",
  whiteBright: "\x1b[97m",

  // Background colors
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",

  // Bright background colors
  bgBlackBright: "\x1b[100m",
  bgRedBright: "\x1b[101m",
  bgGreenBright: "\x1b[102m",
  bgYellowBright: "\x1b[103m",
  bgBlueBright: "\x1b[104m",
  bgMagentaBright: "\x1b[105m",
  bgCyanBright: "\x1b[106m",
  bgWhiteBright: "\x1b[107m",
};

// Aliases
codes.gray = codes.blackBright;
codes.grey = codes.blackBright;
codes.bgGray = codes.bgBlackBright;
codes.bgGrey = codes.bgBlackBright;

/**
 * Applies a single ANSI style to text.
 * @param {string} style - The style name (e.g., 'red', 'bgYellowBright')
 * @param {string} text - The text to style
 * @returns {string}
 */
function apply(style, text) {
  return `${codes[style] || ''}${text}${codes.reset}`;
}

// Generate all style functions: color.red('text'), color.bgBlue('text'), etc.
const color = {};
for (const key in codes) {
  color[key] = (text) => apply(key, text);
}

module.exports = color;
