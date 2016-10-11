#!/usr/bin/env node

const fs = require('fs');
var moduleName = '';
const inquirer = require('inquirer');
const program = require('commander');
const Handlebars = require('handlebars');
var model = require('./model');

var questions = [{
    type: 'input',
    name: 'moduleName',
    message: 'please input module name.',
    default: false
},{
	type: 'input',
	name: 'description',
	message: 'please input description.',
	default: false
}];

program.version('0.0.1')
		.option('run, --runParam', 'run shell')
		.parse(process.argv);

	if (program.runParam) {
			inquirer.prompt(questions).then(function(answers) {
    		console.log(answers);
    		moduleName = answers.moduleName;
    		var hhh = Handlebars.compile(model.packageJson)({moduleName: moduleName});
    		// build();
    		console.log(hhh);
})		
	}


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
