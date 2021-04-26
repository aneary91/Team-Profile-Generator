const { expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('Employee', () => {
    
    'name'+

    it('should return a name when I pass a name to employee', () => {

        let employeeName = "Allie";


        let newEmployee = new Employee(employeeName);


        expect(newEmployee.name).toBe("Allie")
    });

    
    `id`

    it('should return an id when I pass an id to employee', () => {

        let employeeId = "1234"

        let newId = new Id(employeeId);

        expect(newId.id).toBe("1234");

    });
        
    `email`

    it('should return an email when I pass an email to employee', () =>{

        let employeeEmail = "aneary91"

        let newEmail = new Email(employeeEmail);

        expect(newEmail.email).toBe(aneary91)
    })
    
    getName()
    
    getId()
    
    getEmail()
    
    getRole()&mdash;returns 'Employee'



});
