const inquirer = require("inquirer");
const fs = require("fs");
// Import classes from local
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateTemplate = require("./src/generateTemplate");
const team = [];

// Adding Manager
function addManager() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Manager's Name: ",
      },
      {
        name: "id",
        type: "input",
        message: "Manager's ID: ",
      },
      {
        name: "email",
        type: "input",
        message: "Manager's Email: ",
      },
      {
        name: "office",
        type: "input",
        message: "Manager's Office Number: ",
      },
    ])
    .then((responseData) => {
      const newManager = new Manager(
        responseData.name,
        responseData.id,
        responseData.email,
        responseData.office
      );
      team.push(newManager);
      addEmployee();
    });
}
