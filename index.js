const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

function init() {
  loadHtml();
  addDev();
}

function addDev () {
  inquirer
  .prompt([{
    message: "Enter team member's name",
    name: "name",
    validate: (nameInput) => {
      if(nameInput) {
        return true;
      } else{
        console.log("Please enter a name for the new employee.");
        return false;
      }
    },
  },
{
  type: "list",
  message: "Select team member's role.",
  choices: ["Engineer", "Intern", "Manager"],
  name: "role"
},
{
  message: "Enter team member's id",
  name: "id"
},
{
  message: "Enter team member's email address.",
  name: "email"
}])
.then(function({name, role, id, email}) {
let roleInfo = "";
if (role === "Engineer") {
  roleInfo = "Github username";
}
})
