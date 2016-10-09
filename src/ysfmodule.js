#!/usr/bin/env node

const fs = require('fs');
var moduleName = 'ddd';
const inquirer = require('inquirer');
const program = require('commander');

var questions = [{
    type: 'input',
    name: 'moduleName',
    message: 'please input module name.',
    default: false
}];
inquirer.prompt(questions).then(function(answers) {
    console.log(answers.moduleName);
    moduleName = answers.moduleName;
    build();
})

var build = () => {
    try {
        fs.mkdirSync(moduleName, function() {

        })
        fs.mkdirSync(moduleName + '/docs', function() {

        })
        fs.mkdirSync(moduleName + '/src', function() {

        })
        fs.mkdirSync(moduleName + '/test', function() {

        })
        fs.writeFile(moduleName + '/karma.conf.js', '// TODO something', function() {

        })
        fs.writeFile(moduleName + '/package.json', '// TODO something', function() {

        })
        fs.writeFile(moduleName + '/README.md', '// TODO something', function() {

        })
        fs.writeFile(moduleName + '/webpack.config.js', '// TODO something', function() {

        })
    } catch (err) {
        console.log(err);
    }
}
