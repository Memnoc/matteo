#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");

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

console.log(`
Matteo Stara

Passionate about automations, CLI tools, and open source.
I dedicate my time to learn new things and share my knowledge with others.
At work, I'm a sytstem architect and a full-stack developer. I write tools for developers, and strive to make their life easier.

Helping people throuhg technology is my mission.

I hope I can help you too. <3

 👨‍💼 Linkedin: https://www.linkedin.com/in/matteo-genesio-stara-814062a7 
`);
