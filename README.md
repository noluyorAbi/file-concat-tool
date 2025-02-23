
# File Concat Tool 🚀  

[![npm](https://img.shields.io/npm/v/file-concat-tool?logo=npm&style=flat-square)](https://www.npmjs.com/package/file-concat-tool)
[![Weekly Downloads](https://img.shields.io/npm/dw/file-concat-tool?logo=npm&style=flat-square)](https://npm-stat.com/charts.html?package=file-concat-tool)
[![License](https://img.shields.io/github/license/noluyorAbi/file-concat-tool?logo=opensourceinitiative&style=flat-square)](LICENSE)
[![Open Issues](https://img.shields.io/github/issues-raw/noluyorAbi/file-concat-tool?logo=github&style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-%2340BE86?logo=git&style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/pulls)
[![TypeScript Supported](https://img.shields.io/badge/supports-.ts%2F.tsx-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org)

Automated code context generator for AI prompting. Recursively combines `.ts`/`.tsx` files while ignoring common non-source directories and files.

## 🚨 Current Limitations  
**Supported File Types:** `.ts` and `.tsx` only  
**Excluded Patterns:**
- `node_modules` directory
- Files containing "config" in name
- Test directories (`__tests__`) and files (`*.test.ts`)
- Automatically adds output to `.gitignore`

*Future updates may include additional file types and customization options*

## 💡 Motivation  
Tired of manually copying code for AI prompts? This tool solves:
- Automatic `.gitignore` management 🔒
- Smart test file exclusion 🧪
- Recursive directory scanning 🔍
- Clean output formatting 📄

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

**Output:** Creates `tsx_ts_files_content.txt` with:
- Tool credit header
- Relative file paths
- File contents separated by clear markers
- Automatic `.gitignore` update

## 📁 File Processing Rules

| Status | Pattern                          | Examples                     | Action Taken               |
|--------|----------------------------------|------------------------------|----------------------------|
| ✅     | All `.ts` and `.tsx` files       | `index.ts`, `component.tsx`  | Included in output         |
| 🚫     | `node_modules` directory         | Any nested dependency        | Skipped entirely           |
| 🚫     | Files containing "config"        | `config.ts`, `app.config.ts` | Excluded from processing   |
| 🚫     | Test-related files               | `*.test.ts`, `__tests__`     | Ignored during scan        |
| ⚠️     | Existing `.gitignore`            | Any existing gitignore       | Appended with output file  |

## 🌟 Example Output
```text
=== File: src/index.ts ===
import App from './App';

=== File: src/App.tsx ===
export default function App() { ... }

=== File: src/utils/helpers.ts ===
export function formatDate() { ... }
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

Made with ❤️ by noluyorAbi - Automate All The Annoying Things! 🤖
