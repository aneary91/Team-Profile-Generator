const genTeam = team => {
const genManager = manager => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title text-center"><i class="fas fa-glasses"></i>   ${manager.getName()}</h2>
    <h5 class="card-title text-center">name</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  </div>
</div>
`
}

  }

















module.exports = team => {
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