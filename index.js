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

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add Team Members?",
        choices: ["Engineer", "Intern", "My Team is Full"],
      },
    ])
    .then((responseData) => {
      if (responseData.addEmployee === "Engineer") {
        // call addEngineer() function
        addEngineer();
      } else if (responseData.addEmployee === "Intern") {
        // addIntern() function
        addIntern();
      } else if (responseData.addEmployee === "My Team is Full") {
        writeToFile("./dist/index.html", team);
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Engineer's Name: ",
      },
      {
        name: "id",
        type: "input",
        message: "Engineer's ID: ",
      },
      {
        name: "email",
        type: "input",
        message: "Engineer's Email: ",
      },
      {
        name: "github",
        type: "input",
        message: "Engineer's GitHub Username: ",
      },
    ])
    .then((responseData) => {
      const newEngineer = new Engineer(
        responseData.name,
        responseData.id,
        responseData.email,
        responseData.github
      );
      team.push(newEngineer);
      addEmployee();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Intern's Name: ",
      },
      {
        name: "id",
        type: "input",
        message: "Intern's ID: ",
      },
      {
        name: "email",
        type: "input",
        message: "Intern's Email: ",
      },
      {
        name: "school",
        type: "input",
        message: "Intern's School: ",
      },
    ])
    .then((responseData) => {
      const newIntern = new Intern(
        responseData.name,
        responseData.id,
        responseData.email,
        responseData.school
      );
      team.push(newIntern);
      addEmployee();
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateTemplate(data), (err) =>
    err ? console.error(err) : console.log("HTML file has been created!")
  );
}

// Start with addManager function when the page loads
addManager();
