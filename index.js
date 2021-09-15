
        {
            type: "input",
            name: "managerName",
            message: "What is the team managers name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the managers ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the managers office room number?"
        }
    ]).then(function(response) {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        teamMembers.push(manager)
        newMember();
    });
}

function newMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What position would you like to add to team?",
            choices: ["Intern", "Engineer", "Hiring Completed"]
        }
    ]).then(function(response){
        if(response.position === "Intern"){
            internPrompts();
        } else if(response.position === "Engineer") {
            engineerPrompts();
        } else {
            generateMarkdown();
            
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


then(answers => {
    const Intern = Intern(answers.internName, answers.internName);
    teamMembers.push(intern);
    idArray.push(answers.internId);
    createReadStream();
     });
    
    
     function BuildingTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir(OUTPUT_DIR)
     }
     fs.writeFileSync(OutputPath, render(temaMembers), "utf-8");
    }

createManager();

}

appMenu();