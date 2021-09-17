const generateTeam = team => {

    const makeManager = manager => {
        return `
        <div class="card employee-card">
        <div  class="card-header">
        <h2  class="card-title">${manager.getName()}</h2>
        <h3  class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getType()}</h3></div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}
            <li class="list-group-item">Office num: ${manager.retreiveOfficeNumber()}</li>
        </ul>
     </div>
     </div>
        `;
    }
}

const makeEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div  class="card-header">
    <h2  class="card-title">${engineer.getName()}</h2>
    <h3  class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getType()}</h3></div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}
    </ul>
 </div>
 </div>
    `;
}

        const makeIntern = intern => {
    return`
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul clss="list-group">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href=mailto:${intern.getEmail()}">${intern.getRole}</li>
    </ul>
    </div>
    </div>
    `;
        };
        const html = [];

        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => makeManager(manager))
        );

        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => makeEngineer(manager))
            .join("")
        );

        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(manager => makeIntern(Intern))
            .join("")
        );

            return html.join("");
        }
}





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width= div class="card" style="width: 18rem;">