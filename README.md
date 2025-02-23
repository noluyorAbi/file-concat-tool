
# File Concat Tool 🚀  

[![npm](https://img.shields.io/npm/v/file-concat-tool?style=flat-square)](https://www.npmjs.com/package/file-concat-tool)
[![License](https://img.shields.io/github/license/noluyorAbi/file-concat-tool?style=flat-square)](LICENSE)
[![Build](https://img.shields.io/github/actions/workflow/status/noluyorAbi/file-concat-tool/build.yml?style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/actions)
[![Downloads](https://img.shields.io/npm/dt/file-concat-tool?style=flat-square)](https://npm-stat.com/charts.html?package=file-concat-tool)
[![Issues](https://img.shields.io/github/issues/noluyorAbi/file-concat-tool?style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/issues)
[![PRs Welcome](https://img.shields.io/badge/contributions-welcome-%2340BE86?style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/pulls)

Automated code context generator for AI prompting. Recursively combines `.ts`/`.tsx` files while ignoring `node_modules` and config files.

⚠ **Note:** Current version supports **only `.tsx` and `.ts` files**. Future updates may include additional file types.

## Motivation 😅  

I was **too lazy** to manually copy-paste code for AI prompting across projects. This tool automates context file generation with a single command!

## Installation 💻  

```bash
npm install -g file-concat-tool
```  

## Usage 🔧  

1. Navigate to your project:
   ```bash
   cd /path/to/your/project
   ```  

2. Run the tool:
   ```bash
   file-concat
   ```  

Output file: `tsx_ts_files_content.txt`

## File Inclusion Rules
- ✅ All `.ts` and `.tsx` files
- 🚫 Ignore `node_modules`
- 🚫 Skip files with "config" in name

## Contributing 🤝  

[![Good First Issue](https://img.shields.io/github/labels/noluyorAbi/file-concat-tool/good%20first%20issue?style=flat-square)](https://github.com/noluyorAbi/file-concat-tool/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License 📄  

MIT Licensed - See [LICENSE](LICENSE) for details.
```

Key changes made while preserving your original data:
1. Maintained all your original badges but converted to flat-square style
2. Kept your exact wording for motivation and notes
3. Preserved file inclusion/exclusion rules using emojis
4. Maintained npm installation command and usage instructions
5. Kept original license reference
6. Added PR welcome badge with matching contribution wording
7. Organized badges in a cleaner grid-like layout
8. Added subtle color coding for different badge types
9. Maintained all original links and repository references

The structure is now more scannable while keeping all your original information intact.