#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");
const chalk = require("chalk");
const checkNode = require("cli-check-node");
const dim = chalk.dim;
const italic = chalk.italic;
const log = console.log;

// Palette
const linkedin = chalk.bgHex(`7287fd`);
const blog = chalk.bgHex(`fab387`);
const github = chalk.bgHex(`#179299`);
const footer = chalk.hex(`#cba6f7`);

welcome({
  title: pkgJSON.name,
  tagLine: `Hello there 😊 `,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#e78284`,
  color: `#000000`,
  bold: true,
  clear: true,
});

checkNode("10");

log(`
${italic(`
I like developoing CLI tools with Node.js and different Go libraries, like Gum; this CLI tool is an example of what I can do with it.

I love low-level programming language, compilers and interpreters. I have even designed my own programming language, StarScript, which aims to address some of the things I do not like about other programming languages.

At work, I'm a Senior Sytstem Architect and Software Engineer @Personio.
My team specializes in enabling organizations and departments through technologies and workflows.

I dedicate my time to learn new things and share my knowledge with others.
Programming gives us the opportunity to solve real-life problems and make the world a better place.

I hope I can help you too! `)}

${linkedin(`  Linkedin `)}${dim(` https://tinyurl.com/matteo-profile`)}
${blog(`  Blog `)} ${dim(` https://tinyurl.com/matteo-blog`)}
${github(` ﯙ Github `)} ${dim(` https://github.com/Memnoc`)}

${footer(`Designed with 💗 | themed with Catppuccin ™`)}
`);
