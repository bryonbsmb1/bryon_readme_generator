
// TODO: Create a function that returns a license badge based on which license is passed in
// new functions to create readme
const licenses = {
  MIT: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
     link: "https://opensource.org/licenses/MIT"
  },
  Apache: {
          badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
          link:"https://opensource.org/licenses/Apache-2.0"
  },
  Hippocratic:{
          badge:"[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]",
          link:"https://firstdonoharm.dev"
              
  }
}
function renderLicenseBadge(license) {
  return licenses[license].badge
}
function renderLicenseLink(license) {
  return licenses[license].link
}
function renderLicenseSection(license) {
return `${license} ${renderLicenseBadge(license)}(${renderLicenseLink(license)})`
}
function generateMarkdown(input) 
{
  return `
  # Project Title
  ${input.projectTitle}
  # Table of Contents
  1. [License](#license)
  1. [Github](#github)
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Feedback](#feedback)
  ## Github
  [${input.github}](https://github.com/${input.github})
  ## Walkthrough Video Link
  (https://youtu.be/0VkVf-BxWV8)
  ## License
  ${renderLicenseSection(input.license)}
  ## Installation
  ${input.installation}    
  ## Usage
  ${input.usage}
  ## Contributing
  ${input.contributing}
  ## Tests
  ${input.runningTests}
  ## Feedback
  If you have any feedback, please reach out to me at ${input.feedback}
  `;
}

module.exports = generateMarkdown;

