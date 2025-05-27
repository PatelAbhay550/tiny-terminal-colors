# tiny-terminal-colors

A minimal and zero-dependency Node.js library to style your terminal output with ANSI escape codes. Supports foreground colors, background colors, bold, and underline — like a mini chalk.

---

## 📦 Installation

```bash
npm install tiny-terminal-colors
```

---

## 🚀 Usage

```js
const color = require('tiny-terminal-colors');

console.log(color.red("This is red text"));
console.log(color.bgYellow("Text with yellow background"));
console.log(color.green(color.bgBlack("Green on black")));
console.log(color.bold(color.underline(color.cyan("Bold Underlined Cyan"))));
```

---

## 🎨 Supported Styles

### ✅ Text Colors (Foreground)
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### ✅ Background Colors
- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

### ✅ Text Styles
- `bold`
- `underline`

---

## 🧪 Testing

```bash
npm test
```

---

## ❗ Notes

- Styles do **not** chain automatically. You can nest them like this:
  ```js
  color.bold(color.bgRed(color.white("Bold White on Red")))
  ```
- This library uses **standard ANSI escape codes**. It works in most terminals.

---

## 📄 License

MIT © 2025 [Abhay Patel](mailto:patelabhay550@gmail.com)