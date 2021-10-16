var Manager = require("./library/Manager");
var Engineer = require("./library/Engineer");
var Intern = require("./library/Intern");
var inquirer = require("inquirer");
var fs = require("fs");
var managerList = [];
var internList = [];
var engineerList = [];

function createChoices() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "welcome to the team",
        choices: ["add manager", "add engineer", "add intern", "exit app"],
      },
    ])
    .then(({ menu }) => {
      switch (menu) {
        case "add manager":
          addManager();
          break;
        case "add engineer":
          addEngineer();
          break;
        case "add intern":
          addIntern();
          break;
        case "exit app":
          createPage();
      }
    });
}
function createPage() {}
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeename",
        message: "enter employee name",
      },
      {
        type: "input",
        name: "id",
        message: "enter employee id",
      },
      {
        type: "input",
        name: "employeeemail",
        message: "enter employee email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "enter employee office number",
      },
    ])
    .then(({ employeename, id, employeeemail, officeNumber }) => {
      console.log("Man");
      const teamManager = new Manager(
        employeename,
        id,
        employeeemail,
        officeNumber
      );
      managerList.push(teamManager);
      console.log(managerList);
      createsChoices();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeename",
        message: "enter employee name",
      },
      {
        type: "input",
        name: "id",
        message: "enter employee id",
      },
      {
        type: "input",
        name: "employeeemail",
        message: "enter employee email",
      },
      {
        type: "input",
        name: "schoolName",
        message: "enter your schools name",
      },
    ])
    .then(({ employeename, id, employeeemail, schoolName }) => {
      const teamIntern = new Intern(
        employeename,
        id,
        employeeemail,
        schoolName
      );
      internList.push(teamIntern);
      console.log(internList);
      createChoices();
    });
}
createChoices();
