var packageJson = `
{
  "name": "{{moduleName}}",
  "version": "0.0.1",
  "description": "{{description}}",
  "scripts": {
    "build": "webpack -w --config webpack.config.js",
    "test": "karma start karma.conf.js",
    "dev" : "webpack-dev-server --inline --hot -quiet"
  },
  "main":"src/tooltip.js",
  "devDependencies": {
    "html-loader": "^0.3.0",
    "lodash" : "^4.16.2",
    "node-sass": "^3.8.0",
    "css-loader": "^0.22.0",
    "style-loader": "^0.13.1",
    "sass-loader": "^4.0.0",
    "karma": "^0.13.15",
    "karma-chrome-launcher": "^1.0.1",
    "karma-phantomjs-launcher": "^0.2.1",
    "karma-spec-reporter": "0.0.23",
    "karma-webpack": "^1.7.0",
    "phantomjs": "^1.9.19",
    "jasmine-core": "^2.4.1",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  },
  "author": "{{author}}",
  "license": "MIT"
}
`;

var webpackConfigJs = `
module.exports =  {
    entry: "./src/index.js",
    output: {
        path: "./docs",
        filename: "index.js"
    },
	//devtool: "source-map",
    resolve:{
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {test: /\.html/, loader: 'html'},
			{test: /\.scss$/,  loader: "style!css!sass" }
        ]
    }
};
`;

var karmaConfJs = `
// we can just use the exact same webpack config by requiring it
// but make sure to delete the normal entry
var webpackConf = require('./webpack.config');
delete webpackConf.entry;

module.exports = function (config) {

	config.set({
		browsers: ['PhantomJS'], // Chrome ,PhantomJS
		frameworks: ['jasmine'],
		reporters: ['spec'],
		// this is the entry file for all our tests.
		files: ['./test/index.js'],
		// we will pass the entry file to webpack for bundling.
		preprocessors: {
			'./test/index.js': ['webpack']
		},
		webpack: webpackConf,
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true
	})
}
`;

var gitignore = `
.idea
node_modules
`;

var srcHtml = `<h3>hello,{{moduleName}}</h3>`;

var srcJs = `
/**
 * {{moduleName}} 组件
 *
 * @author:   {{author}}
 * @date:     {{time}}
 *
 * @props  to do something
 * @props  to do something
 * 
 */

require('./{{name}}.scss');

module.exports = {
	name : '{{moduleName}}',
	template : require('./{{name}}.html')
}
`;
module.exports = {
	packageJson: packageJson,
	webpackConfigJs: webpackConfigJs,
	karmaConfJs: karmaConfJs,
	gitignore: gitignore,
	srcHtml: srcHtml,
	srcJs: srcJs
}
