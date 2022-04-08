// Imports from the Engineer class
const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "DevHalpert";
  const newEngineer = new Engineer("Jim", 1, "JimHalpert@gmail.com", testValue);
  expect(newEngineer.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const newEngineer = new Engineer("Jim", 1, "JimHalpert@gmail.com", "DevHalpert");
  expect(newEngineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "DevHalpert";
  const newEngineer = new Engineer("Jim", 1, "JimHalpert@gmail.com", testValue);
  expect(newEngineer.getGithub()).toBe(testValue);
});

// All tests passed
