const Employee = require("Employee");

class Manager extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getschool() {
    return this.school;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;


// change everythig to manager to b the sa,r as intern and employee 