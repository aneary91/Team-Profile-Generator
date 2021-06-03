const Engineer = require("../lib/Engineer");

// testing parameter

test("testing to see if the github parameter is working", () => {
  const github = "aneary91";
  const engineer = new Engineer("Allison", 1234, "aneary91@gmail.com", github);
  expect(engineer.github).toBe(github);
});

// testing methods

test("testing the getRole method to see it gets the roles", () => {
  const role = "Engineer";
  const engineer = new Engineer(
    "Allison",
    1234,
    "aneary91@gmail.com",
    "aneary91"
  );
  expect(engineer.getRole()).toBe(role);
});

test("testing the getGitHub to see if it returns my github", () => {
  const user = "aneary91";
  const engineer = new Engineer("Allison", 1234, "aneary91@gmail.com", user);
  expect(engineer.getGithub()).toBe(user);
});
