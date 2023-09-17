#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");
const chalk = require("chalk");

const log = console.log;

welcome({
  title: pkgJSON.name,
  tagLine: `Hello there!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${chalk.blue(`Matteo Stara`)}
${chalk.dim(`
Passionate about automations, CLI tools, and open source.
I dedicate my time to learn new things and share my knowledge with others.
At work, I'm a Senior Sytstem Architect and Software Engineer @Personio.

I work with an array of different technologies, and frontend frameworks, including React, Svelte, Vue.
My team specializes in enabling organizations and departments through technologies and workflows.

Solving real-life problems with code and technologies is my mission.

I hope I can help you too! `)}

${chalk.red(` Linkedin:`)}${chalk.dim(` https://tinyurl.com/matteo-profile`)}
${chalk.yellow(` Blog:`)} ${chalk.dim(` https://tinyurl.com/matteo-blog`)}
${chalk.green(`ﯙ Github:`)} ${chalk.dim(` https://github.com/Memnoc`)}
`);
