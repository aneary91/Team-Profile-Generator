const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

class Manager extends Employee{

    constructor(name, id, email, github){
       
        super(name, id, email)
        this.github = github;

    }
    getofficeNumber(){

    }
    
    getRole(){
        return 'Manager'
    }
}