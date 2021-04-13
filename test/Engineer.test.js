const Employee = require("./Employee");

class Engine extends Employee{

    constructor(name, id, email, github){
       
        super(name, id, email)
        this.github = github;

    }
    getGithub(){

    }
    
    getRole(){
        return 'Engineer'
    }
}