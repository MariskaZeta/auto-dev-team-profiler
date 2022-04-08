// Imports from the Intern class
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "MSU";
  const newIntern = new Intern("Ryan", 1, "RyanHoward@gmail.com", testValue);
  expect(newIntern.school).toBe(testValue);
});

test("getRole() function should return \"Intern\"", () => {
  const testValue = "Intern";
  const newIntern = new Intern("Ryan", 1, "RyanHoward@gmail.com", "MSU");
  expect(newIntern.getRole()).toBe(testValue);
});

test("getSchool() function should return MSU", () => {
  const testValue = "MSU";
  const newIntern = new Intern("Ryan", 1, "RyanHoward@gmail.com", testValue);
  expect(newIntern.getSchool()).toBe(testValue);
});

// all tests passed
