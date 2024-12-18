#!/usr/bin/env node
const { execSync } = require("child_process")
const fs = require("fs");
const path  = require("path");

// Create a new directory
const projectDir = "my-new-project";
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir);
}

process.chdir(projectDir); // Change the working directory to the newly created folder

const css = path.join(projectDir, "css");
const js = path.join(projectDir, "js");

// Run command
const runCommand = (cmd) => {
    execSync(cmd, {srdio:"inherit"});
}

fs.mkdirSync("css");
fs.mkdirSync("js");

// Install dependencies
// console.log("Intalling dependencies ...");
// runCommand("npm init -y");
// runCommand("npm install react react-dom");
// runCommand("npm install --save-dev webpack webpack-cli");

// create basic files
console.log("Setting up files ...")
fs.writeFileSync("index.html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" media="all" href="css/style.css">
</head>
<body>
    
    hello world

    <script src="js/script.js" type="text/javascript"></script>
</body>
</html>`);

// Create style.css in css folder
fs.writeFileSync("css/style.css", `*{
    margin : 0px;
    padding: 0px;
    box-sizing: border-box;
}

html,body{
    width: 100%;
    height:100%;
}`);

// Create script.js in js folder
fs.writeFileSync("js/script.js", "console.log('Hello, world!');");


console.log("setup completed");

