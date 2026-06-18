const test = require("node:test"); // node js inner testing framework that provides us a test function
const assert = require("node:assert"); // node js inner assertion library that provides us a strictEqual function to compare values
const { add } = require("../src/math");

// test name is add two numbers...
test("adds two numbers", () => {
  assert.strictEqual(add(2, 3), 5); // here means that 2 + 3 should equal 5.
});