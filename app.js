const Inquirer = require("Inquirer");
const Jest = require("Jest");

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
            }
            .then(answers =>{
                console.log(answers.managerName);
            })     
        ]);
        createManager();
}
startApp();
}
