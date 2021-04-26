const Employee = require("./Employee")

// extend the Employee class to an engineer class


class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;   
    }
    getgithub(){
        return this.github
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
