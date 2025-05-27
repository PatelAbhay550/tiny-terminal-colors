# tiny-terminal-colors

🎨 A lightweight, zero-dependency Node.js package to colorize your terminal output using ANSI escape codes. Supports **foreground**, **background**, **bright variants**, and **text styles** — just like `chalk`.

---

## 📦 Installation

```bash
npm install tiny-terminal-colors
```

---

## 🚀 Usage

```js
const color = require('tiny-terminal-colors');

console.log(color.red('This is red text'));
console.log(color.bgYellow('Yellow background'));
console.log(color.green(color.bgBlack('Green on black')));
console.log(color.bold(color.underline(color.cyan('Bold Underlined Cyan'))));
```

---

## 🎨 Supported Styles

### ✅ Foreground Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

### 🌟 Bright Foreground Colors

- `blackBright`
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

#### 🔁 Aliases

- `gray`, `grey` → `blackBright`

---

### 🟩 Background Colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

### ✨ Bright Background Colors

- `bgBlackBright`
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

#### 🔁 Aliases

- `bgGray`, `bgGrey` → `bgBlackBright`

---

### 🔤 Text Styles

- `bold`
- `underline`

---

## 🧪 Example Output

```js
console.log(color.red('Red'));
console.log(color.bgGreen('Green background'));
console.log(color.bold(color.blue('Bold Blue')));
console.log(color.cyanBright(color.bgMagentaBright('Bright Cyan on Magenta')));
```

---

## 📄 License

MIT © 2025 [Abhay Patel](mailto:patelabhay550@gmail.com)

---

## 💡 Notes

- Nest styles by wrapping:
  ```js
  color.bold(color.bgYellow(color.red('Red Bold on Yellow')))
  ```
- No runtime dependencies — pure ANSI.
- Works in most standard terminals (Mac, Linux, Windows with ANSI support).

---

Enjoy styling your terminal output! 😎
