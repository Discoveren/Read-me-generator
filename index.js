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
{
    type: 'input',
    name:'contributing',
    message: 'Please enter instructions for those who wish to contribute to your project'
},
{
    type: 'input',
    name:'tests',
    message: 'Please enter test instructions for this project'
},
{
    type: 'input',
    name:'questions',
    message: ['Please enter your email address for others to contact you if they have queries']
},
{
    type: 'input',
    name:'questions',
    message: ['Please enter your Github username']
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
