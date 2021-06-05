const inquirer = require("inquirer");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

var teamArr = [];

const startApp = () => {
  const promptManager = () => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is your managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is your managers iD name?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is your managers email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is your managers office number?",
        name: "officeNumber",
      }]).then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail, 
          answers.officeNumber
        );
        teamArr.push(manager);
        createTeam();
      });
  }
  
  function createTeam() {
      inquirer
      .prompt([
          {
        type: "list",
        name: "userChoice",
        message: "Would you like to add more team members?",
        choices: ["Add an Engineer","Add an Intern", "Make a team"],
    },
])
    .then((answers) => {
      statement = answers.command;
      
      switch (statement) {
        case "Add an Engineer":
          getEngineer();
          break;

        case "Make a team":
          buildTeam();
          break;
          
        case "Add an Intern":
            getIntern();
          break;
        }
    });
}

function getEngineer() {
  inquirer
  .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineers id?",
        name: "id",
      },
      {
          type: "input",
          message: "What is the engineers email?",
          name: "email",
      },
      {
          type: "input",
          message: "What is the engineers github username?",
        name: "github",
    },
    ])
    .then((answers) => {
        var { name, id, email, github } = answers;
      var engineer = new Engineer(
        answer.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMember.push(engineer);
    });
}
function getIntern() {
  inquirer
    .prompt([
        {
        type: "input",
        message: "What is the Interns name?",
        name: "name",
    },
      {
          type: "input",
        message: "What is the Interns id?",
        name: "id",
      },
      {
          type: "input",
        message: "What is the Interns email?",
        name: "email",
      },
      {
          type: "input",
        message: "What is the school name?",
        name: "school",
      },
    ])
    .then((answers) => {
        var { name, id, email, school } = answers;
        var intern = Intern(name, id, email, school);
    });
}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}
promptManager();
};
startApp();
