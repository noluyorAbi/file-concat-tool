Below is an example `README.md` you can include in your project:

# File Concat Tool 🚀

**File Concat Tool** is an npm package designed to generate context windows for AI prompting. It recursively searches for `.ts` and `.tsx` files (while ignoring the `node_modules` folder and files with "config" in their names) and concatenates their contents into a single text file. This is especially useful for issue detection and context generation in smaller projects.

## Motivation 😅

I was **too lazy** to always copy and paste code for AI prompting and issue detection across different projects. To automate this repetitive task and streamline my workflow, I created this npm package. Now, you can quickly generate a context file for AI prompting with just one command!

## Installation 💻

To install **File Concat Tool** globally, run:

```bash
npm install -g file-concat-tool
```

## Usage 🔧

1. Navigate to the folder where you want to generate the context file:
   ```bash
   cd /path/to/your/project
   ```

2. Run the command:
   ```bash
   file-concat
   ```

This will search the current directory and its subdirectories for `.ts` and `.tsx` files, then create a file named `tsx_ts_files_content.txt` containing all the gathered code.

## Contributing 🤝

Contributions are welcome! If you have ideas for improvements or find bugs, please open an issue or submit a pull request.

## License 📄

This project is licensed under the MIT License.
