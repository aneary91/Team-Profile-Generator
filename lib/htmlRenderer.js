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
// make one for intern and engineeer 
        

return renderMain(html.join(''));
};

const renderManager = (manager) => {
    var template = fs.readFileSync (path.resolve(srcDir, 'manager.html'), 'utf8')  ;
    
    template = replacePlaceholders(template, 'name', manager.getName());
     //make a manager.html

    return template;
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  module.exports = render;
  