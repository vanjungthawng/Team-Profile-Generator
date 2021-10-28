function generateTemplate(team) {
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <title>Team Profile Generator</title>
    </head>
    <body>
      <header class="bg-danger pt-3 pb-3 mb-5 text-white text-center">
        <h1>MY TEAM</h1>
      </header>
      <main class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-9 card-columns">
            ${generateCards(team)}
          </div>
        </div>
      </main>
    </body>
  </html>`;
  return html;
}

function generateCards(team) {
  let cards = [];
  for (let i = 0; i < team.length; i++) {
    cards.push(`<div class="card border-info mb-3 ">
    <div class="card-header bg-primary text-white border-info">
      <h3 class="card-title">${team[i].getName()}</h3>
      <h5 class="card-title">${team[i].getRole()}</h5>
    </div>
    <div class="card-body bg-light text-primary">
      <table class="table table-sm table-white">
        <tbody>
          <tr class="bg-white pt-3">
            <th scope="row">ID:</th>
            <td>${team[i].getId()}</td>
          </tr>
          <tr class="bg-white">
            <th scope="row">Email:</th>
            <td>
              <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a>
            </td>
          </tr>
          ${getPosInfo(team[i])}
        </tbody>
      </table>
    </div>
  </div>`);
  }
  return cards.join("");
}

function getPosInfo(teamMember) {
  switch (teamMember.getRole()) {
    case "Manager":
      return `<tr class="bg-white">
            <th scope="row">Office Number</th>
            <td>${teamMember.getOfficeNumber()}</td>
            </tr>`;
    case "Engineer":
      return `<tr class="bg-white">
            <th scope="row">Github</th>
            <td><a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></td>
            </tr>`;
    case "Intern":
      return `<tr class="bg-white">
            <th scope="row">School</th>
            <td>${teamMember.getSchool()}</td>
            </tr>`;
  }
}

module.exports = generateTemplate;
