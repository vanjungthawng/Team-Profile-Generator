const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  describe("getSchool Method", () => {
    it("should return Intern student school", () => {
      const newIntern = new Intern("Alice", "947", "alice@vic.com", "Victoria");
      const school = "Victoria";
      expect(newIntern.getSchool()).toEqual(school);
    });
  });

  describe("getRole Method", () => {
    it("should return Intern student Role", () => {
      const newIntern = new Intern("Alice", "947", "alice@vic.com", "Victoria");
      const role = "Intern";
      expect(newIntern.getRole()).toEqual(role);
    });
  });
});
