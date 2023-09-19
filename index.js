#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");
const chalk = require("chalk");
const log = console.log;

welcome({
  title: pkgJSON.name,
  tagLine: `Hello there 😊 `,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${chalk.italic(`
I like developoing CLI tools with Node.js and different Go libraries, like Gum; this CLI tool is an example of what I can do with it.

I love low-level programming language, compilers and interpreters. I have even designed my own programming language, StarScript, which aims to address some of the things I do not like about other programming languages.

At work, I'm a Senior Sytstem Architect and Software Engineer @Personio.
My team specializes in enabling organizations and departments through technologies and workflows.

I dedicate my time to learn new things and share my knowledge with others.
Programming gives us the opportunity to solve real-life problems and make the world a better place.

I hope I can help you too! `)}

${chalk.bgHex(`7287fd`)(`  Linkedin `)}${chalk.dim(
  ` https://tinyurl.com/matteo-profile`
)}
${chalk.bgHex(`fab387`)(`  Blog `)} ${chalk.dim(
  ` https://tinyurl.com/matteo-blog`
)}
${chalk.bgHex(`#179299`)(` ﯙ Github `)} ${chalk.dim(
  ` https://github.com/Memnoc`
)}

${chalk.hex(`#cba6f7`)(`Designed with 💗, themed with catppuccin ™`)}
`);
