const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const value = "GitHubUser";
  const em = new Engineer("Foo", 1, "test@test.com", value);
  expect(em.github).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const em = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(em.getRole()).toBe(value);
});

test("Can get GitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const em = new Engineer("Foo", 1, "test@test.com", value);
  expect(em.getGithub()).toBe(value);
});
