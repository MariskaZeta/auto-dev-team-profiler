// This will define and export the Engineer class, and inherit from the Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer"
  }
  getRole() {
    return this.title;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
