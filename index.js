import inquirer from 'inquirer';
import fs from 'fs';


const generateREADME = ({title, description, motivation, problemSolved, whatLearned, emailAddress, github}) => 

`
# ${title}

## Table of contents
* [Description](#description)
* [Motivation](#motivation)
* [Problem Solved](#problem-solved)
* [What Learned](#what-learned)
* [Contact me](#contact-me)

## Description:
${description}

## Motivation:
${motivation}

## Problem Solved:
${problemSolved}

## What Learned:
${whatLearned}

## Contact me
* [Email: ${emailAddress}](mailto:${emailAddress}) 
* [GitHub: ${github}](https://github.com/${github})
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
        message: 'Describe your app?'
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
        name: 'emailAddress',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    }
    ])

    .then((response) => {
        const README = generateREADME(response);

        fs.writeFile('distribution/README.md', README, (err) => err ? console.log(err) : console.log('README.md generated'))
    });

