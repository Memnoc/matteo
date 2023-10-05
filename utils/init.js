const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");
const welcome = require("cli-welcome");
const pkgJSON = require("./../package.json");

module.exports = () => {
  unhandled();

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
};
