const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const value = 100;
  const em = new Manager("Foo", 1, "test@test.com", value);
  expect(em.officeNumber).toBe(value);
});

test('getRole() should return "Manager"', () => {
  const value = "Manager";
  const em = new Manager("Foo", 1, "test@test.com", 100);
  expect(em.getRole()).toBe(value);
});

test("Can get office number via getOffice()", () => {
  const value = 100;
  const em = new Manager("Foo", 1, "test@test.com", value);
  expect(em.getOfficeNumber()).toBe(value);
});
