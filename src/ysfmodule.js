#!/usr/bin/env node

const fs = require('fs');
var moduleName = '';
const inquirer = require('inquirer');
const program = require('commander');
const Handlebars = require('handlebars');
const moment = require('moment');
var model = require('./model');

var questions = [{
    type: 'input',
    name: 'moduleName',
    message: 'please input module name.',
    default: false
},{
	type: 'input',
	name: 'description',
	message: 'please input module description.',
	default: false
},{
	type: 'input',
	name: 'author',
	message: 'please input author name.',
	default: false
}];

program.version('0.0.2')
		.option('run, --runParam', 'run shell')
        .option('-c ,--compile', 'compile by your config.json')
		.parse(process.argv);

	if (program.runParam) {
			inquirer.prompt(questions).then(function(answers) {
    		console.log('success!!');
  		try{
  			var name = answers.moduleName.slice(3);
    		var Data = {
    			moduleName: answers.moduleName,
    			description: answers.description,
    			author: answers.author,
    			name: name,
    			time: moment().format('lll')
    		}
    		packageJson = Handlebars.compile(model.packageJson)(Data);
    		karmaConfJs = Handlebars.compile(model.karmaConfJs)({});
    		webpackConfigJs = Handlebars.compile(model.webpackConfigJs)({});
    		gitignore = Handlebars.compile(model.gitignore)({});
    		srcHtml = Handlebars.compile(model.srcHtml)(Data);
    		srcJs = Handlebars.compile(model.srcJs)(Data);
            readmeMd = Handlebars.compile(model.readmeMd)(Data);
            docHtml = Handlebars.compile(model.docHtml)(Data);
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
        fs.writeFile(moduleName + '/README.md', readmeMd, function() {

        })
        fs.writeFile(moduleName + '/webpack.config.js', webpackConfigJs, function() {

        })
        fs.writeFile(moduleName + '/.gitignore', gitignore, function() {

        })
        fs.writeFile(moduleName + '/src/'+name+'.js', srcJs, function(){

        })
        fs.writeFile(moduleName + '/src/'+name+'.html', srcHtml, function(){
        	
        })
        fs.writeFile(moduleName + '/src/'+name+'.scss', '', function(){
        	
        })
        fs.writeFile(moduleName + '/test/'+'index.js', '', function(){

        })
        fs.writeFile(moduleName + '/test/'+name+'.spec.html', '', function(){

        })
        fs.writeFile(moduleName + '/docs/'+name+'.html', docHtml, function(){

        })
    } catch (err) {
        console.log(err);
    }
}
