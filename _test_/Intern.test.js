// import { TestWatcher } from "@jest/core"
// import Intern from "../library/Intern"
var Intern = require("../library/intern.js");

test("Intern - Constructor - name", () => {
  const testIntern = new Intern("AN", 12, "an@email.com", "UOF");
  expect(testIntern.getName()).toBe("AN");
});
test("Intern - Constructor - id", () => {
  const testIntern = new Intern("AN", 12, "an@email.com", "UOF");
  expect(testIntern.getId()).toBe(12);
});
test("Intern - Constructor - schoolName", () => {
  const testIntern = new Intern("AN", 12, "an@email.com", "UOF");
  expect(testIntern.getschoolName()).toBe("UOF");
});
test("Intern - Constructor - role", () => {
  const testIntern = new Intern("AN", 12, "an@email.com", "UOF");
  expect(testIntern.getRole()).toBe("Intern");
});
test("Intern - Constructor - email", () => {
  const testIntern = new Intern("AN", 12, "an@email.com", "UOF");
  expect(testIntern.getEmail()).toBe("an@email.com");
});
