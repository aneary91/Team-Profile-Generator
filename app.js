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
}
