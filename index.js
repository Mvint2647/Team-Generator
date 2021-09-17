const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
const teamMembers = [ ]
const emmit_Dir = path.resolve(__dirname, "output")
const emmitPath = path.join(emmit_Dir, "team.html");
const render = require("./src/page-template");


// TODO: Create an array of questions for user input
newMember()

function managerPrompts() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the managers name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the managers ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers email address?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the managers GitHub username?"
        }
    ]).then(function(response) {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.gitHub);
        teamMembers.push(manager);
        newMember();
    });
}

function newMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What position would you like to add to team?",
            choices: ["Manager", "Intern", "Engineer", "Hiring Completed"]
        }
    ]).then(function(response){
        if(response.position === "Intern"){
            internPrompts();
        } else if(response.position === "Engineer") {
            engineerPrompts();
        } else if(response.position === "Manager") {
            managerPrompts();
            
        }else{
            BuildingTeam()
        }
    });
}

function engineerPrompts() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineers name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineers ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineers email address?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineers GitHub username?"
        }
    ]).then(function(response) {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
        teamMembers.push(engineer);
        newMember();
    });
}

function internPrompts (){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the interns name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the interns school?"
        }

    ])
.then(answers => {
    const intern = new Intern(answers.internName, answers.internName);
    teamMembers.push(intern);
    newMember();
    idArray.push(answers.internId);
    createReadStream();
     })
    
    }
     function BuildingTeam() {
    if(!fs.existsSync(emmit_Dir)) {
        fs.mkdir(emmit_Dir)
     }
     fs.writeFileSync(emmitPath, render(teamMembers), "utf-8");
    }

