const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  describe("getOffice Method", () => {
    it("should return Manager Office Number", () => {
      const newManager = new Manager("Carl", "9457", "carl@office.com", "D435");
      const officeNumber = "D435";

      expect(newManager.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  describe("getRole Method", () => {
    it("should return Manager Role", () => {
      const newManager = new Manager("Carl", "9457", "carl@office.com", "D435");
      const role = "Manager";

      expect(newManager.getRole()).toEqual(role);
    });
  });
});
