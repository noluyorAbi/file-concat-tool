# File Concat Tool 🚀

[![npm](https://img.shields.io/npm/v/file-concat-tool?logo=npm&style=flat-square)](https://www.npmjs.com/package/file-concat-tool)  
[![Weekly Downloads](https://img.shields.io/npm/dw/file-concat-tool?logo=npm&style=flat-square)](https://npm-stat.com/charts.html?package=file-concat-tool)  
[![License](https://img.shields.io/github/license/noluyorAbi/file-concat-tool?logo=opensourceinitiative&style=flat-square)](LICENSE)  
[![Open Issues](https://img.shields.io/github/issues-raw/noluyorAbi/file-concat-tool?logo=github&style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/issues)  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-%2340BE86?logo=git&style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/pulls)  
[![Chalk used](https://img.shields.io/badge/console-chalk-brightgreen?logo=node.js&style=flat-square)]()

Automated code context generator for AI prompting. Recursively combines source files (`.ts`, `.tsx`, `.js`, `.jsx`, `.html`, `.css`, `.scss`) while ignoring common non-source directories and files, and formats console output with colors.

## 🚨 Current Limitations

**Supported File Types:** `.ts`, `.tsx`, `.js`, `.jsx`, `.html`, `.css`, `.scss`  
**Excluded Patterns:**

- `node_modules` directory
- Files containing "config" in name
- Test directories (`__tests__`) and files (`*.test.*`)
- Output file automatically added to Git exclude (`.git/info/exclude`)

_Future updates may include additional file types and customization options._

## 💡 Motivation

Tired of manually copying code for AI prompts? This tool solves:

- Automatic Git-exclude management 🔒
- Smart test file exclusion 🧪
- Recursive directory scanning 🔍
- Clean, colored console output 📄

Get complete code context with **one command**!

## 🛠 Installation

Install globally via npm:

```bash
npm install -g file-concat-tool
```

## 🚦 Usage

1. Navigate to your project:
   ```bash
   cd /path/to/your/project
   ```
2. Run the tool:
   ```bash
   file-concat
   ```

**Output:** Creates `source_files_content.txt` with:

- Tool credit header
- Relative file paths
- File contents separated by clear markers
- Colored console log of processed files
- Automatic Git exclude update

## 📁 File Processing Rules

| Status | Pattern                    | Examples                     | Action Taken                |
| ------ | -------------------------- | ---------------------------- | --------------------------- |
| ✅     | All supported extensions   | `index.ts`, `style.scss`     | Included in output          |
| 🚫     | `node_modules` directory   | Any nested dependency        | Skipped entirely            |
| 🚫     | Files containing "config"  | `config.ts`, `app.config.js` | Excluded from processing    |
| 🚫     | Test-related files         | `*.test.ts`, `__tests__`     | Ignored during scan         |
| ⚠️     | Existing Git exclude entry | `.git/info/exclude`          | Appended or already present |

## 🌟 Example Output

```text
=== File: src/index.ts ===
import App from './App';

=== File: src/App.tsx ===
export default function App() { ... }

=== File: src/styles/main.scss ===
body { margin: 0; }
```

## 🤝 Contributing

We welcome contributions! Please follow our workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details.

---

Made with ❤️ by [noluyorAbi](https://github.com/noluyorAbi) - Automate All The Annoying Things! 🤖
