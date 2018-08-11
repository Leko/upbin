/* eslint-env jest */
const assert = require("assert");
const path = require("path");
const { find, execute } = require("../../upbin");

test("find should reject bin is not exists", async () => {
  try {
    await find("xxx");
    assert.fail("Missing expected exception");
  } catch (e) {} // eslint-disable-line no-empty
});
test("find should reject bin is not executable", async () => {
  try {
    await find("not-executable");
    assert.fail("Missing expected exception");
  } catch (e) {} // eslint-disable-line no-empty
});
test("find should resolve bin is executable", async () => {
  const expected = path.resolve("fixtures", "executable");
  assert.strictEqual(await find("executable"), expected);
});

test("execute should through non-zero exit code", () => {});
