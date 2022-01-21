// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //   return `# ${data.title}
   return `# ${data.title}
 
   ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
   <br> 
   ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
   <br>
   ![badge](https://img.shields.io/github/issues/${data.github}/${data.repo})
   <br>
   ![badge](https://img.shields.io/github/issues-closed/${data.github}/${data.repo})
   <br>
   ![badge](https://img.shields.io/github/last-commit/${data.github}/${data.repo})
   <br>
   ![badge](https://img.shields.io/badge/license-${data.license}-important)
   
   ## Description
   
    ${data.description}
  
   ## Table of Contents
   - [Description](#description)
   - [Documentation](#documentation)
   - [Usage](#usage)
   - [Screenshot](#screenshot)
   - [Features](#features)
   - [Acknowledgements](#acknowledgements)
   - [License](#license)
   - [Testing](#testing)
   - [Contact](#contact)
 
   ## Documentation
   ${data.documentation}
  
   ## Usage
   ${data.usage}
 
   ## Screenshot
   ![Screenshot](${data.screenshot})
 
   ## Features
   ${data.features}
   
   # Acknowledgements
   ${data.acknowledgements}
     
   ## License
   ![badge](https://img.shields.io/badge/license-${data.license}-important)
   <br>
   Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
 
 
   ## Testing
   ${data.testing}
 
   ## Contact:
   Mail me with any questoins! <a href="mailto:${data.email}">${data.email}</a>`
  
 }
 
 module.exports = generateMarkdown;