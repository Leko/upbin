const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { promisify } = require("util");
const findUp = require("find-up");

const { X_OK } = fs.constants;
const access = promisify(fs.access);

const isExecutable = bin => access(bin, X_OK).then(() => true, () => false);

const find = async binName => {
  const bin = await findUp(path.join("node_modules", ".bin", binName));
  if (!bin) {
    throw new Error(`${binName} not found`);
  }
  if (!(await isExecutable(bin))) {
    throw new Error(`${binName} is not executable`);
  }

  return bin;
};

const execute = (bin, args) => {
  const { status } = spawnSync(bin, args, { stdio: "inherit" });
  return status;
};

module.exports = {
  find,
  execute
};
