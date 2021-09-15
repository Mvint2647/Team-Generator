.then(answers => {
    const intern = Intern(answers.internName, answers.intern)
    teamMembers.push(intern);
    idArray.push(answers.internId);
    });

]).then(answers => {
    const Engineer = Engineer(answers.github,answers.getGithub)
    teamMembers.push(Engineer);
    idArray.push(answers.engineerId);
    });

]).then(answers => {
    const Intern = Intern(answers.internName, answers.internName)
    teamMembers.push(intern);
    idArray.push(answers.internId);
    });
}
    
    
    
    function BuildingTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir(OUTPUT_DIR)
    }
    fs.writeFileSync(OutputPath, render(temaMembers), "utf-8");
}
createManager();

appMenu();