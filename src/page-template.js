const generateTeam = (team) => {
  const makeManager = (manager) => {
    return `
        <div class="card employee-card">
        <div  class="card-header">
        <h2  class="card-title">${manager.getName()}</h2>
        <h3  class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3></div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">Id: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getRole()}">${manager.getEmail()}
            <li class="list-group-item">Office num: ${manager.getOfficeNumber()}</li>
        </ul>
     </div>
     </div>
        `;
  };

  const makeEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div  class="card-header">
    <h2  class="card-title">${engineer.getName()}</h2>
    <h3  class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3></div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Id: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getRole()}">${engineer.getEmail()}
    </ul>
 </div>
 </div>
    `;
  };

  const makeIntern = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul clss="list-group">
    <li class="list-group-item">Id: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href=mailto:${intern.getEmail()}">${intern.getRole()}</li>
    </ul>
    </div>
    </div>
    `;
  };
  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => makeManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => makeEngineer(engineer))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => makeIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = myTeam => {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width= div class="  cardstyle="width: 18rem;">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
<link href="/index.js" rel="">
  <title>Card Generate Result</title>
</head>

<body>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
     ${generateTeam(myTeam)}
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"><o/li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      <a href="#" class="card-link"></a>
    </div>
  </div>
</body>
</html>
  
  `
}