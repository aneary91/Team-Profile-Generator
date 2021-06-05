//require these dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// require classes and methods
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// create variables for directory
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

var teamArr = [];

const startApp = () => {
  const promptManager = () => {
    inquirer
      .prompt([
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
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        teamArr.push(manager);
        createTeam();
      });
  };

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "userChoice",
          message: "Would you like to add more team members?",
          choices: ["Add an Engineer", "Add an Intern", "Make a team"],
        },
      ])
      .then((answers) => {
        switch (answers.userChoice) {
          case "Add an Engineer":
            getEngineer();
            break;

          case "Add an Intern":
            getIntern();
            break;

          default:
            buildTeam();
        }
      });
  }

  function getEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineers name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is the engineers id?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is the engineers email?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineers github username?",
          name: "engineerGithub",
        },
      ])
      .then((answers) => {
        var engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArr.push(engineer);

        createTeam();
      });
  }
  function getIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Interns name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is the Interns id?",
          name: "interId",
        },
        {
          type: "input",
          message: "What is the Interns email?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What is the school name?",
          name: "internSchool",
        },
      ])
      .then((answers) => {
        var intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArr.push(intern);

        createTeam();
      });
    }
    
    function buildTeam() {
        fs.writeFileSync(outputPath, mainRender(teamArr), "utf-8");
    }
    promptManager();
};
console.log(teamArr);
startApp();
