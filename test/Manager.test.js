const Manager = require("../lib/Manager");

// testing office number parameters
test('testing to see if the office number parameter is working.', () => {
    const officeNumber = '911';
    const mngr = new Manager("Allison", 1234, "aneary91@gmail.com", officeNumber);
    expect(mngr.officeNumber).toBe(officeNumber);  
});

// testing office number and get role methods
test('testing to see if the office number method returns office number', () => {
    const phoneNumber = '911';
    const mngr = new Manager("Allison", 1234, "aneary91@gmail.com", phoneNumber);
    expect(mngr.getOfficeNumber()).toBe(phoneNumber);
}); 

test('testing to see if the getRole method returns the role', () => {
    const role = 'Manager';
    const mngr = new Manager("Allison", 1234, 'aneary91@gmail.com', role);
    expect(mngr.getRole()).toBe(role);
});
