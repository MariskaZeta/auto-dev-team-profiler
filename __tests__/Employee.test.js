// Importing the Employee class
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Employee class", () => {
      const newEmployee = new Employee();
      expect(newEmployee instanceof Employee).toEqual(true);
    });

    it("should check if the given employee name gets processed properly through the constructor", () => {
      const name = "Dwight";
      const newEmployee = new Employee = new Employee(name);
      expect(newEmployee.name).toEqual(name);
    });
  });
});
