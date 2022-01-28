
const inquirer = require('inquirer');
const fs = require('fs');

const readMeData = (input) => `
# Project Title
${input.projectTitle}
## Installation
${input.installation}    
## Usage/Examples
${input.usage}
## Contributing
${input.contributing}
## Running Tests
${input.runningTests}
## Feedback
If you have any feedback, please reach out to me at ${input.feedback}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is a brief description of this project?",
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What packages where installed?',
      
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are some usage examples?',
        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to your project?',
        
      },
      {
        type: 'input',
        name: 'runningTests',
        message: 'What command do you run to test?',
        
      },
      {
        type: 'input',
        name: 'feedback',
        message: 'What email address is used for feedback?',
      },
  ])
  .then((input) => {
    const readMe = readMeData(input)
    const filename = `README.md`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Your new README thats Awesome is created!')
    );
  });