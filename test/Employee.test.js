const Employee = require("../lib/Employee");

// test to see if the Employees class and methods work.
test("testing if employee class will start", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test('testing the name in the constructor parameters', () => {
    const name = "Allison";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('testing the id in the constructor parameters', () =>{
    const id = 1234;
    const employee = new Employee('Allison', id);
    expect(employee.id).toBe(id);
});

test('testing the email in the constructor parameters', () => {
    const email = "aneary91@gmail.com";
    const employee = new Employee('Allison', 1234, email);
    expect(employee.email).toBe(email);
});

// testing the methods
test('testing the getName method to see if we get the name', () =>{
    const val = 'Allison';
    const emp = new Employee(val);
    expect(emp.getName()).toBe(val);
});

test('testing the getId method to see if we get the id', () =>{
    const val = 1234;
    const emp = new Employee('Allison', val);
    expect(emp.getId()).toBe(val);
});

test('testing the getEmail method to see if we get the email', () =>{
    const val = 'aneary91@gmail.com';
    const emp = new Employee('Allison', 1234, val);
    expect(emp.getEmail()).toBe(val);
});

test('testing the getRole to see if we return "Employee"', () =>{
    const val = 'Employee';
    const emp = new Employee('Allison', 1234, 'aneary91@gmail.com')
    expect(emp.getRole()).toBe(val);
})

test










// const { expect } = require("@jest/globals");
// const { describe } = require("yargs");

// describe('Employee', () => {

//     'name'+

//     it('should return a name when I pass a name to employee', () => {

//         let employeeName = "Allie";

//         let newEmployee = new Employee(employeeName);

//         expect(newEmployee.name).toBe("Allie")
//     });

//     `id`

//     it('should return an id when I pass an id to employee', () => {

//         let employeeId = "1234"

//         let newId = new Id(employeeId);

//         expect(newId.id).toBe("1234");

//     });

//     `email`

//     it('should return an email when I pass an email to employee', () =>{

//         let employeeEmail = "aneary91"

//         let newEmail = new Email(employeeEmail);

//         expect(newEmail.email).toBe(aneary91)
//     })

//     getName()

//     getId()

//     getEmail()

//     getRole()&mdash;returns 'Employee'

// });
