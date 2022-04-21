const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project title',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Provide a brief description of the project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'User Story',
      name: 'UserStory',
    },
    {
      type: 'input',
      message: 'acceptance criteria',
      name: 'AcceptanceCri',
    },
    {
      type: 'input',
      message: 'instructions for needed installations',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Contributers',
      name: 'Contributers',
    },
    {
      type: 'list',
      message: 'Licencing',
      name: 'Licence',
      choices: ["MIT", "GNU", "Apache"]
    },
  ])
  .then((data) => {
    console.log(data) ;
    fs.writeFileSync('./README2.md', generateFormatReadme(data))    
});

function generateFormatReadme(data) {
    return `
## Title: 
${data.Title}
## Description: 
${data.Description}
## User Story:
${data.UserStory}
## Acceptance Criteria:
${data.AcceptanceCri}
## Table of Contents:
- [Description](#Description)
- [User Story](#UserStory)
- [Acceptance Criteria](#AcceptanceCri)
- [Table of Contents]()
- [Installation](#Installation)
- [Contributers](#Contributers)
- [Licence](#Licence)

## Installation:
${data.Installation}
## Contributers:
${data.Contributers}
## Licence:
[![License: ${data.Licence}](https://img.shields.io/badge/License-${data.Licence}-yellow.svg)](https://opensource.org/licenses/${data.Licence})
`
}