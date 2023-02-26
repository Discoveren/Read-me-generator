const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name:'title',
    message: 'Please enter a title for your project' 
},
{
    type: 'editor',
    name:'description',
    message: 'Please enter a description for your project'
},
{
    type: 'input',
    name:'table of Contents',
    message: 'Please enter a table of contents for your project'
},
{
    type: 'input',
    name:'installation',
    message: 'Please enter some installation instructions for your project'
},
{
    type: 'input',
    name:'usage',
    message: 'Please enter a usage for your project'
},
{
    type: 'list',
    name:'license',
    message: 'What License should this project fall under?',
    choices: ['Harvard', 'MIT', 'ISC']
},    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
