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
function createPage() {
  var codeHtml = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Builder</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </head>
      <body>
    <header class="bg-primary text-center">
        <h1>Team Profile Generator</h1>
    </header>
    <main class="d-flex flex-wrap container">`;
  var managerHtml = ``;
  for (let i = 0; i < managerList.length; i++) {
    managerHtml += `
        <div class="card">
        <h2 class="card-title bg-info">Manager</h2>
        <div class="card-body">
          <h3>Name: ${managerList[i].name}</h3>
          <h4 class="email"><a href="mailto:${managerList[i].email}">Email</a></h4>
            <h5 class="id">id:${managerList[i].id}</h5>
            <p>OfficeNumber:${managerList[i].officeNumber}</p>
        </div>
      </div>
        `;
  }
  var internHtml = ``;
  for (let i = 0; i < internList.length; i++) {
    internHtml += `
        <div class="card">
        <h2 class="card-title bg-info">intern</h2>
        <div class="card-body">
          <h3>Name: ${internList[i].name}</h3>
          <h4 class="email"><a href="mailto:${internList[i].email}">Email</a></h4>
            <h5 class="id">id:${internList[i].id}</h5>
            <p>SchoolName:${internList[i].schoolName}</p>
        </div>
      </div>
        `;
  }
  var engineerHtml = ``;
  for (let i = 0; i < engineerList.length; i++) {
    engineerHtml += `
        <div class="card">
        <h2 class="card-title bg-info">engineer</h2>
        <div class="card-body">
          <h3>Name: ${engineerList[i].name}</h3>
          <h4 class="email"><a href="mailto:${engineerList[i].email}">Email</a></h4>
            <h5 class="id">id:${engineerList[i].id}</h5>
            <a href="https://github.com/${engineerList[i].github}">github</a>
        </div>
      </div>
        `;
  }
  var closeHtml = `</main>
    </body>
    </html>`;
  var completeFile =
    codeHtml + managerHtml + engineerHtml + internHtml + closeHtml;
  fs.writeFileSync("index.html", completeFile, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  console.log("HTML generated", completeFile);
}

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
      createChoices();
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
function addEngineer() {
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
        name: "github",
        message: "enter employee github",
      },
    ])
    .then(({ employeename, id, employeeemail, github }) => {
      const teamEngineer = new Engineer(
        employeename,
        id,
        employeeemail,
        github
      );
      engineerList.push(teamEngineer);
      console.log(engineerList);
      createChoices();
    });
}
createChoices();
