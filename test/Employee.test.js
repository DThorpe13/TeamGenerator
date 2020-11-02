const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testname = "Alice";
  const em = new Employee(testname);
  expect(em.name).toBe(testname);
});

test("Can set id via constructor argument", () => {
  const value = 100;
  const em = new Employee("Foo", value);
  expect(em.id).toBe(value);
});

test("Can set email via constructor argument", () => {
  const value = "test@test.com";
  const em = new Employee("Foo", 1, value);
  expect(em.email).toBe(value);
});

test("Can get name via getName()", () => {
  const value = "Alice";
  const em = new Employee(value);
  expect(em.getName()).toBe(value);
});

test("Can get id via getId()", () => {
  const value = 100;
  const em = new Employee("Foo", value);
  expect(em.getId()).toBe(value);
});

test("Can get email via getEmail()", () => {
  const value = "test@test.com";
  const em = new Employee("Foo", 1, value);
  expect(em.getEmail()).toBe(value);
});

test("getRole() should return \"Employee\"", () => {
  const value = "Employee";
  const em = new Employee("Alice", 1, "test@test.com");
  expect(em.getRole()).toBe(value);
});
