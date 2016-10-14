var packageJson = require('./tpl/packageJson');
var webpackConfigJs = require('./tpl/webpackConfigJs');
var karmaConfJs = require('./tpl/karmaConfJs');
var gitignore = require('./tpl/gitignore');
var srcHtml = require('./tpl/srcHtml');
var srcJs = require('./tpl/srcJs');
var readmeMd = require('./tpl/readmeMd');
var docHtml = require('./tpl/docHtml');
module.exports = {
	packageJson: packageJson,
	webpackConfigJs: webpackConfigJs,
	karmaConfJs: karmaConfJs,
	gitignore: gitignore,
	srcHtml: srcHtml,
	srcJs: srcJs,
	readmeMd: readmeMd,
	docHtml: docHtml
}
