const path = require('path');
const fs = require('fs');

var srcDir=path.resolve(__dirname, '../src');

const render = employee => {
    const html=[]
//  space renderer concatnates for you
        html.push(...employee
            .filter(e => e.getRole() === 'Manager')
            .map(manager => renderManager(manager)).join('')
            );
        html.push(...employee
            .filter(e => e.getRole() === 'Intern')
            .map(intern => renderIntern(intern)).join('')
            );
        html.push(...employee
            .filter(e => e.getRole() === 'Engineer')
            .map(engineer => renderEngineer(engineer)).join('')
            );
// make one for intern and engineeer 
        

return renderMain(html.join(''));
};

const renderManager = (manager) => {
    var template = fs.readFileSync (path.resolve(srcDir, 'manager.html'), 'utf8')  ;
    
    template = replacePlaceholders(template, 'name', manager.getName());
    template = replacePlaceholders(template, 'email', email.getName());
    template = replacePlaceholders(template, 'id', id.getName());
    template = replacePlaceholders(template, 'role', role.getName());
    template = replacePlaceholders(template, 'officeNumber', officeNumber.getName());
     //make a manager.html

    return template;
};
const renderIntern = (intern) => {
    var template = fs.readFileSync (path.resolve(srcDir, 'intern.html'), 'utf8')  ;
    
    template = replacePlaceholders(template, 'name', manager.getName());
    template = replacePlaceholders(template, 'email', email.getName());
    template = replacePlaceholders(template, 'id', id.getName());
    template = replacePlaceholders(template, 'role', role.getName());
    template = replacePlaceholders(template, 'officeNumber', officeNumber.getName());


    return template;
};
const renderEngineer = (engineer) => {
    var template = fs.readFileSync (path.resolve(srcDir, 'engineer.html'), 'utf8')  ;
    
    template = replacePlaceholders(template, 'name', manager.getName());
    template = replacePlaceholders(template, 'email', email.getName());
    template = replacePlaceholders(template, 'id', id.getName());
    template = replacePlaceholders(template, 'role', role.getName());
    template = replacePlaceholders(template, 'officeNumber', officeNumber.getName());
     //make a manager.html

    return template;
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  const renderMain = html => {
      const template = fs.readFileSync(path.resolve(srcDir, 'intern.html'), 'utf8')
  }
  
  module.exports = render;
  