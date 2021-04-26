const inquirer = require("inquirer")
const Jest = require("Jest");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");

const startApp = () => {

    const createManager = () => {
        inquirer.prompt([

            
            {
                type: "input", 
                message: "What is your managers name?",
                name: "managerName"
            },

            {
                type: "input", 
                message: "What is your managers iD name?",
                name: "managerId"
            },
            {
                type: "input", 
                message: "What is your managers email?",
                name: "email"
            },
            {
                type: "input", 
                message: "What is your managers office number?",
                name: "officeNumber"
            }
            .then(answers =>{
                console.log(answers.managerName);

            var{name, id, email, officeNumber} = answers
            var manager = Manager(name, id, email, officeNumber);

            teamMember.push(manager);

            })     
        ]);
        createManager();
}
startApp();
createTeam();
}


function createTeam() {

    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message:"Would you like to add more team members?",
            choices:["Add an Engineer", "Add an Intern", "Make team"]
        }
        ])
        .then(answers => {
            statement = answers.command;

            switch(statement){
                case "Add an Engineer":
                    getEngineer();
                    break;

                case "Add an Intern":
                    getIntern();
                    break;

                case "Make team":
                    buildTeam();
                    break;
            }
        })
}

function getEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineers name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the engineers id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the engineers email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineers github username?",
                name: "github"
            }

        ])
        .then(answers => {
            var {name, id, email, github} = answers;
            var engineer = Engineer(name, id, email, github);
            teamMember.push(engineer);
        })

}
function getIntern() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Interns name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Interns id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Interns email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the school name?",
                name: "school"
            }

        ])
        .then(answers => {
            var {name, id, email, school} = answers;
            var intern = Intern(name, id, email, school);

        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

startApp()