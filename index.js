const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./src/css")

const employees = [];

function init() {
  inquirer
    .prompt([{
      message: "Welcome to the Dev Team Profile Generator! Please enter a team name:",
      name: "devTeamName"
    }])
    .then(function(data) {
      const devTeamName = data.devTeamName
      employees.push(devTeamName)
      addManager();
    })
}

function addManager() {
  inquirer
    .prompt([{
        message: "Please enter your manager's name.",
        name: "name"
      },
      {
        message: "Please enter your manager's email address.",
        name: "email"
      },
      {
        type: "number",
        message: "Please enter your manager's office number.",
        name: "officeNumber"
      },
    ])

    .then(function(data) {
      const name = data.name
      const id = 1
      const email = data.email
      const officeNumber = data.getOfficeNumber
      const teamMember = new Manager(name, id, email, officeNumber)
      employees.push(teamMember)
      addDevs();
    });
}

function addDevs() {
  inquirer
    .prompt([{
      type: "list",
      message: "Would you like to add more team members?",
      choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
      name: "addDevData"
    }])
    .then(function(data) {
      switch (data.addDevData) {
        case "Yes, add an engineer":
          addEngineer();
          break;

        case "Yes, add an intern":
          addIntern();
          break;
        case "No, my team is complete":
          createTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([{
        message: "Please enter the engineer's name.",
        name: "name"
      },
      {
        message: "Please enter the engineer's email address.",
        name: "email"
      },
      {
        message: "Please enter the engineer's GitHub username.",
        name: "gitHubUsername"
      }
    ])
    .then(function(data) {
      const name = data.name
      const id = employees.length + 1
      const email = data.email
      const gitHub = data.gitHubUsername
      const teamMember = new Engineer(name, id, email, gitHub)
      employees.push(teamMember)
      addDevs()
    });
};

function addIntern() {
  inquirer.prompt([{
        message: "Please enter the intern's name.",
        name: "name"
      },
      {
        message: "Please enter the intern's email.",
        name: "email"
      },
      {
        message: "Please enter the school the intern is attending.",
        name: "school"
      }
    ])
    .then(function(data) {
      const name = data.name
      const id = employees.length + 1
      const email = data.email
      const school = data.school
      const teamMember = new Intern(name, id, email, school)
      employees.push(teamMember)
      addDevs()
    });
};

function createTeam() {

  const htmlArray = []
  const htmlBeginning = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${employees[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${employees[0]}</h1>
    </div>
    <div class="card-container">
    `
  htmlArray.push(htmlBeginning);

  for (let i = 1; i < employees.length; i++) {
    let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${employees[i].name}</h2>
                <h2>${employees[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${employees[i].id}</p>
                <p>Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></p>
        `
    if (employees[i].officeNumber) {
      object += `
            <p>${employees[i].officeNumber}</p>
            `
    }
    if (employees[i].gitHubUsername) {
      object += `
            <p>GitHub: <a href="https://github.com/${employees[i].gitHubUsername}">${employees[i].gitHubUsername}</a></p>
            `
    }
    if (employees[i].school) {
      object += `
            <p>School: ${employees[i].school}</p>
            `
    }
    object += `
        </div>
        </div>
        `
    htmlArray.push(object)
  }

  const htmlEnd = `
    </div>
    </body>
    </html>
    `
  htmlArray.push(htmlEnd);

  fs.writeFile(`./dist/${employees[0]}.html`, htmlArray.join(""), function(err) {

  })
}

init();
