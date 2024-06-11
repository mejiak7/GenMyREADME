const inquirer = require('inquirer');
const fs = require('fs');

const readMeBody = ({user, email, project, description, license, install, testRun, repo, contribute}) => `
# ${project}

## Description

${description}


## Table of Contents 

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${install}

## Usage

${repo}

## License

${license}

## How to Contribute

${contribute}

## Tests

${testRun}

## Questions

Any questions regarding my project you can contact me:

Github: https://github.com/${user}

Email: ${email}

`;

inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'user',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: "What is your project's name?",
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please write a short description about your project:',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license will you be using in your project?',
      name: 'license',
      choices: ['none', 'Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0'],
    },
    {
      type: 'input',
      message: 'What are the dependencie installation instructions?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What are the test run instructions?',
      name: 'testRun',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repository?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What should the user know about contributing to the repository?',
      name: 'contribute',
    },
  ]).then((answers) => {
    const generateReadMe = readMeBody(answers);
  
    fs.writeFile('README.md', generateReadMe, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README created!');
      }
    });
  });