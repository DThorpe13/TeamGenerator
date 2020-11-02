const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const value = "UCLA";
  const em = new Intern("Foo", 1, "test@test.com", value);
  expect(em.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
  const value = "Intern";
  const em = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(em.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
  const value = "UCLA";
  const em = new Intern("Foo", 1, "test@test.com", value);
  expect(em.getSchool()).toBe(value);
});
