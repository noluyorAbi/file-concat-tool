#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

/**
 * Recursively searches the root directory for .ts and .tsx files,
 * while ignoring the "node_modules" directory and files containing "config" in their name.
 *
 * @param {string} rootDir - The directory to search in.
 * @returns {string[]} - An array of found file paths.
 */
function findTsFiles(rootDir) {
  const filesList = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules") continue;
        walk(fullPath);
      } else if (entry.isFile()) {
        if (entry.name.toLowerCase().includes("config")) continue;
        if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
          filesList.push(fullPath);
        }
      }
    }
  }

  walk(rootDir);
  return filesList;
}

/**
 * Writes the paths and contents of found files into a text file.
 *
 * @param {string[]} filePaths - Array of file paths.
 * @param {string} outputFile - Path to the output file.
 */
function writeFilesToTxt(filePaths, outputFile) {
  let outputContent = `This context file was generated with the npm package file-concat-tool by noluyorAbi\n`;
  outputContent += `https://www.npmjs.com/package/file-concat-tool\n\n\n`;

  for (const filePath of filePaths) {
    let content;
    try {
      content = fs.readFileSync(filePath, "utf8");
    } catch (error) {
      console.error(`Error reading file ${filePath}: ${error.message}`);
      continue;
    }
    outputContent += `=== File: ${filePath} ===\n`;
    outputContent += content + "\n\n";
  }
  fs.writeFileSync(outputFile, outputContent, "utf8");
}

/**
 * Updates .gitignore to ignore "tsx_ts_files_content.txt" if the file exists.
 *
 * @param {string} rootDir - The root directory of the project.
 */
function updateGitignore(rootDir) {
  const gitignorePath = path.join(rootDir, ".gitignore");
  const ignoreEntry = "tsx_ts_files_content.txt";

  if (!fs.existsSync(gitignorePath)) {
    return; // Do nothing if .gitignore does not exist
  }

  let gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
  if (!gitignoreContent.includes(ignoreEntry)) {
    fs.appendFileSync(gitignorePath, `\n${ignoreEntry}\n`, "utf8");
    console.log(`Added "${ignoreEntry}" to .gitignore.`);
  }
}

/**
 * Main function that searches the directory and writes the results to a text file.
 */
function main() {
  // Set the root directory. process.cwd() uses the current working directory.
  const rootDirectory = process.cwd();
  // Name of the output file.
  const outputTxt = "tsx_ts_files_content.txt";

  console.log(`Searching for .tsx and .ts files in: ${rootDirectory}`);
  const files = findTsFiles(rootDirectory);
  console.log(`Found files: ${files.length}`);

  console.log(`Writing contents to ${outputTxt}...`);
  writeFilesToTxt(files, outputTxt);

  // Only update .gitignore if it exists
  updateGitignore(rootDirectory);

  console.log("Done!");
}

main();
