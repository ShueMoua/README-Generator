const inquirer = require("inquirer");
const fs = require('fs');



inquirer.prompt([{
            //Title of your project
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            // Overivew explanation of your project
            type: "input",
            name: "description",
            message: "What is the description of your project?"
        },
        {
            // Include navigational links that will direct you to each section of the ReadME
            type: "checkbox",
            message: "What do you want to include in your READme?",
            name: "tableContents",
            choices: [
                "Installation",
                "Usage",
                "License",
                "Contribution",
                "Tests",
                "Questions"
            ]
        },
        {
            //Provide step by step instructions and examples about how to get it running
            type: "input",
            name: "installation",
            message: "What is the process to installing and deploying this application?"
        },
        {
            //How to use the application
            type: "input",
            name: "usage",
            message: "How do you use this application?"
        },
        {
            //License (Add a badge for the license picked near the to pof the readme, and a notice is added to the license section explaining the license)
            type: "list",
            message: "Which license would you like for this application?",
            name: "license",
            choices: [
                "MIT",
                "GNU GPL v3",
                "Unlicense"
            ]
        },
        {
            //Contribution Guidelines
            type: "input",
            name: "Contribution-Guidelines",
            message: "Contriubtion Guidelines???"
        },
        {
            //Tests 
            type: "input",
            name: "tests",
            message: "Describe and show how to run the tests"
        },
        {
            //Questions, Add Github username with link to your profile && add email address with instructions on how to reach me with additional quetsions
            type: "input",
            name: "questions",
            message: ""
        }
    ])
    .then(function(response) {
        console.log(response)
        const md = generateMD(response);

        return fs.writeFile("README.md", md, function(err) {
            if (err) {
                console.log(err)
            }

        });

    });

function generateMD(response) {
    return `
# ${response.title}
<hr>

## Description: 
    ${response.description}
<hr>
    
## Table of Contents
    ${response.tableContents}
<hr>
    
## Installation
    ${response.installation}
<hr>
    
## Usage
    ${response.usage}
<hr>
    
## License
    ${response.license}
<hr>
    
## Test
    ${response.tests}
<hr>
    
## Questions
    ${response.questions}
    `
};