const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, motivation, problemSolved, whatLearned, standOut}) => 

`html goes here`;

inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your app.'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation to build this app?'
    },
    {
        type: 'input',
        name: 'problemSolved',
        message: 'What problem does this app solve?'
    },
    {
        type: 'input',
        name: 'whatLearned',
        message: 'What did you learn while building this app?'
    },
    {
        type: 'input',
        name: 'standOut',
        message: 'What makes your app stand out?'
    }
    ])

    .then((response) => {
        const htmlContent = generateREADME(response);

        fs.writeFile('index.html', htmlContent, (err) => err ? console.log(err) : console.log('index.html generated'))
    })

