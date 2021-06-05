const Intern = require("../lib/Intern");

// testing school parameters
test("testing to see if the school parameter is working", () => {
  const school = "SMU";
  const int = new Intern("Allison", 1234, "aneary91@gmail.com", school);
  expect(int.school).toBe(school);
});

// testing getSchool and getRole methods

test("testing to see if the getRole method gets the role", () => {
  const role = "Intern";
  const int = new Intern("Allison", 1234, "aneary91@gmail.com", role);
  expect(int.getRole()).toBe(role);
});

test('testing to see if the getSchool returns the school', () =>{
    const college = 'SMU';
    const int = new Intern("Allison", 1234, "aneary91@gmail.com", college);
    expect(int.getSchool()).toBe(college);
});