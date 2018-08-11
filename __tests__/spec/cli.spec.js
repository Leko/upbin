/* eslint-env jest */
const assert = require("assert");
const path = require("path");
const { spawnSync } = require("child_process");

const bin = path.resolve(__dirname, "..", "..", "cli.js");
const opts = {
  cwd: __dirname,
  encoding: "utf8"
};

test("Show usage when arguments is empty", () => {
  const { stderr, status } = spawnSync(bin);
  assert(/usage/i.test(stderr));
  assert.strictEqual(status, 1);
});
test("Show not found error when binName is not exists", () => {
  const { stderr, status } = spawnSync(bin, ["xxx"]);
  assert(/not found/i.test(stderr), stderr);
  assert.strictEqual(status, 1);
});
test("Pass through stdout", () => {
  const { stdout } = spawnSync(bin, ["non-zero-exit"], opts);
  assert.strictEqual(stdout, "stdout\n");
});
test("Pass through stderr", () => {
  const { stderr } = spawnSync(bin, ["non-zero-exit"], opts);
  assert.strictEqual(stderr, "stderr\n");
});
test("Pass through exit code", () => {
  const { status } = spawnSync(bin, ["non-zero-exit"], opts);
  assert.strictEqual(status, 3);
});
