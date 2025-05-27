const styles = {
  // Reset
  reset: "\x1b[0m",

  // Text styles
  bold: "\x1b[1m",
  underline: "\x1b[4m",

  // Text colors (foreground)
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",

  // Background colors
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

/**
 * Wraps a string in ANSI style codes.
 * @param {string} style - Style key (e.g., 'red', 'bgBlue', 'bold')
 * @param {string} text - The text to style
 * @returns {string}
 */
function applyStyle(style, text) {
  return `${styles[style] || ""}${text}${styles.reset}`;
}

// Export individual functions for each style
const color = {};
for (const key in styles) {
  color[key] = (text) => applyStyle(key, text);
}

module.exports = color;