#!/usr/bin/env node
const { find, execute } = require("./upbin");

const cliArgs = process.argv.slice(2);
if (cliArgs.length === 0) {
  console.error(`Usage: upbin [binName] [args...]`); // eslint-disable-line no-console
  process.exit(1);
}

find(cliArgs[0])
  .catch(error => {
    console.error(`Error: ${error.message}`); // eslint-disable-line no-console
    process.exit(1);
  })
  .then(bin => execute(bin, cliArgs.slice(1)))
  .then(exitCode => process.exit(exitCode));
