const genTeam = (team) => {
  //generating manager html template
  const genManager = (manager) => {
    return `
  <div class="card col-md-3"  style="width: 18rem;">
  <div class="card-body">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title text-center"><i class="fas fa-glasses"></i>   ${manager.getName()}</h2>
    <h5 class="card-title text-center">${manager.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getId()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
  </div>
</div>
`;
  };
  //
  const teamHTML = [];
  teamHTML.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => genManager(manager))
  );

  const genIntern = (intern) => {
    return `
      <div class="card col-md-3" style="width: 18rem;">
      <div class="card-body">
        <div class="card-header bg-primary text-white">
        <h2 class="card-title text-center"><i class="fas fa-glasses"></i>   ${intern.getName()}</h2>
        <h5 class="card-title text-center">${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">${intern.getEmail()}</li>
        <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
      </div>
    </div>
    `;
  };


  teamHTML.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => genIntern(intern))
  );

  const genEngineer = (engineer) => {
    return `
    <div class="card col-md-3" style="width: 18rem;">
    <div class="card-body">
      <div class="card-header bg-primary text-white">
      <h2 class="card-title text-center"><i class="fas fa-glasses"></i>   ${engineer.getName()}</h2>
      <h5 class="card-title text-center">${engineer.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.getId()}</li>
      <li class="list-group-item">${engineer.getEmail()}</li>
      <li class="list-group-item">${engineer.getGithub()}</li>
    </ul>
    </div>
  </div>
    `;
  };


    teamHTML.push(
      team
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => genEngineer(engineer))
    );
    

  return teamHTML.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></head>
    
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4 text-center"> My Team </h1>
        </div>
        </div>
      <div class="container">
      <div class="row">
      <div class="col-12">
      ${genTeam(team)}            
            </div>
            </div>
          </div>
          </body>
          </html>
          `;
};
