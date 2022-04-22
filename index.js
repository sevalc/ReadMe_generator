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
      message: 'Links to the project',
      name: 'Links',
    },
    {
      type: 'input',
      message: 'Contributing',
      name: 'Contributing',
    },
    {
      type: 'list',
      message: 'Licencing',
      name: 'Licence',
      choices: ["MIT", "GNU", "Apache"]
    },
    {
      type: 'input',
      message: 'Please provide gitHUb and email',
      name: 'Questions',
    },
  ])
  .then((data) => {
    console.log(data) ;
    fs.writeFileSync('./README1.md', generateFormatReadme(data))    
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
- [Title:](#title)
- [Description:](#description)
- [User Story:](#user-story)
- [Acceptance Criteria:](#acceptance-criteria)
- [Table of Contents:](#table-of-contents)
- [Installation:](#installation)
- [Links to the project:](#links-to-the-project)
- [Contributing:](#contributing)
- [Licence:](#licence)
- [Questions:](#questions)

## Installation:
${data.Installation}
## Links to the project:
${data.Links}
## Contributing:
${data.Contributing}
## Licence:
This project is licenced under:
[![License: ${data.Licence}](https://img.shields.io/badge/License-${data.Licence}-yellow.svg)](https://opensource.org/licenses/${data.Licence})
## Questions:
Please contact me for additional questions. 
${data.Questions}
`
}