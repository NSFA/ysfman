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
},{
	type: 'input',
	name: 'author',
	message: 'please input author name.',
	default: false
}];

program.version('0.0.1')
		.option('run, --runParam', 'run shell')
		.parse(process.argv);

	if (program.runParam) {
			inquirer.prompt(questions).then(function(answers) {
    		console.log(answers);
  		try{
    		var packageData = {
    			moduleName: answers.moduleName,
    			description: answers.description,
    			author: answers.author
    		}
    		packageJson = Handlebars.compile(model.packageJson)(packageData);
    		karmaConfJs = Handlebars.compile(model.karmaConfJs)({});
    		webpackConfigJs = Handlebars.compile(model.webpackConfigJs)({});
    		gitignore = Handlebars.compile(model.gitignore)({});
    		var name = answers.moduleName.slice(3);
    		build(answers.moduleName,name);
    	}catch(err){
    		console.log(err);
    	}
})		
	}


var build = (moduleName, name) => {
    try {
        fs.mkdirSync(moduleName, function() {

        })
        fs.mkdirSync(moduleName + '/docs', function() {

        })
        fs.mkdirSync(moduleName + '/src', function() {

        })
        fs.mkdirSync(moduleName + '/test', function() {

        })
        fs.writeFile(moduleName + '/karma.conf.js', karmaConfJs, function() {

        })
        fs.writeFile(moduleName + '/package.json', packageJson, function() {

        })
        fs.writeFile(moduleName + '/README.md', '// TODO something', function() {

        })
        fs.writeFile(moduleName + '/webpack.config.js', webpackConfigJs, function() {

        })
        fs.writeFile(moduleName + '/.gitignore', gitignore, function() {

        })
        fs.writeFile(moduleName + '/src/'+name+'.js', 'todo', function(){

        })
        fs.writeFile(moduleName + '/src/'+name+'.html', 'todo', function(){
        	
        })
    } catch (err) {
        console.log(err);
    }
}
