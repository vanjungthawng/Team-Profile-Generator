const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  describe("getGithub Method", () => {
    it("should return Engineer GitHub username", () => {
      const newEngineer = new Engineer(
        "Van",
        "234",
        "van@zt.com",
        "vanjungthawng"
      );
      const github = "vanjungthawng";
      expect(newEngineer.github).toEqual(github);
    });
  });

  describe("getRole Method", () => {
    it("should return Engineer Role", () => {
      const newEngineer = new Engineer(
        "Van",
        "234",
        "van@zt.com",
        "vanjungthawng"
      );
      const role = "Engineer";
      expect(newEngineer.getRole()).toEqual(role);
    });
  });
});
