/* eslint-env jest */
const assert = require("assert");
const path = require("path");
const { find, execute } = require("../../src/upbin");

test("find should reject bin is not exists", async () => {
  try {
    await find("xxx", { cwd: __dirname });
    assert.fail("Missing expected exception");
  } catch (e) {
    if (!/not found/.test(e.message)) {
      assert.fail(e.message);
    }
  }
});
test("find should reject bin is not executable", async () => {
  try {
    await find("not-executable", { cwd: __dirname });
    assert.fail("Missing expected exception");
  } catch (e) {
    if (!/not executable/.test(e.message)) {
      assert.fail(e.message);
    }
  }
});
test("find should resolve bin is executable", async () => {
  const expected = path.resolve(
    __dirname,
    "..",
    "node_modules",
    ".bin",
    "executable"
  );
  assert.strictEqual(await find("executable", { cwd: __dirname }), expected);
});

test("execute should through non-zero exit code", () => {
  const bin = path.resolve(
    __dirname,
    "..",
    "node_modules",
    ".bin",
    "non-zero-exit"
  );
  assert.strictEqual(execute(bin, []), 3);
});
