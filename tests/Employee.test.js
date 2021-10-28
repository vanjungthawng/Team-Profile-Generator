const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  describe("getName Method", () => {
    it("should return employee name", () => {
      const newEmployee = new Employee(
        "Van Zaathang",
        "94854",
        "vanzt@gmail.com"
      );
      const name = "Van Zaathang";

      const result = newEmployee.getName();

      expect(result).toEqual(name);
    });
  });

  describe("getID Method", () => {
    it("should return employee ID", () => {
      const newEmployee = new Employee(
        "Van Zaathang",
        "94854",
        "vanzt@gmail.com"
      );
      const id = "94854";

      const result = newEmployee.getId();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail Method", () => {
    it("should return employee Email", () => {
      const newEmployee = new Employee(
        "Van Zaathang",
        "94854",
        "vanzt@gmail.com"
      );
      const email = "vanzt@gmail.com";

      const result = newEmployee.getEmail();

      expect(result).toEqual(email);
    });
  });

  describe("getRole Method", () => {
    it("should return employee role", () => {
      const newEmployee = new Employee(
        "Van Zaathang",
        "94854",
        "vanzt@gmail.com"
      );
      const role = "Employee";

      const result = newEmployee.getRole();

      expect(result).toEqual(role);
    });
  });
});
