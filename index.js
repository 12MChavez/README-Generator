import inquirer from 'inquirer';
import fs from 'fs';


const generateREADME = ({title, description, motivation, problemSolved, whatLearned, standOut}) => 

`
# ${title}

## Description:
${description}

## Motivation:
${motivation}

## Problem Solved:
${problemSolved}

## What Learned:
${whatLearned}

## Stand Out
${standOut}
`;

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
        const README = generateREADME(response);

        fs.writeFile('README.md', README, (err) => err ? console.log(err) : console.log('README.md generated'))
    });

