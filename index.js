
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./utils/generateMarkdown")


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
      {
        type: 'list',
        name: 'license',
        message:'What license would you like you use?',
        choices:["MIT","Apache","Hippocratic"]
      },
      {
        type:'input',
        name:'github',
        message:'What is your github profile name?',

  
      }

  ])
  .then((input) => {
    const readMe = generateMarkdown(input)
    const filename = `README.md`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Your new README is now created!')
    );
  });