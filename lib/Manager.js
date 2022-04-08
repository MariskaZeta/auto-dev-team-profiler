// This will define and export the Manager class, and inherit from the Employee class
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager"
  }
  getRole() {
    return this.title;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
