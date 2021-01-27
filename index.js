// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the project's title?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of the project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'How do you use this program?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would you like?',
        name: 'license',
        choices: [
            "Apache License 2.0", 
            "GNU General Public License v3.0",
            "MIT License",
            "The Unlicense",
            "None"
        ]
    },
    {
        type: 'input',
        message: 'Who else contributed to this project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'How did you test your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your github username: ',
        name: 'github',
    }
];    

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), (err) =>
      err ? console.error(err) : console.log('Success!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile('README.md', response));
}

// Function call to initialize app
init();
