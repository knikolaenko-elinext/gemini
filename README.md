# Gemini Demo App

This web application is written on AngularJS + Bootstrap basis. [Ui-router](https://github.com/angular-ui/ui-router) is using for views routing. [Angular-gettext](https://angular-gettext.rocketeer.be/) adds multi-language support to the app. Source code is organized according CommonJS style and gets bundled by [Browserify](http://browserify.org/). Build process is automated by [Gulp](http://gulpjs.com/) (e.g. LESS compilation, JS/CSS resources concatenation and obfuscation)

### Prerequisites

You need git to clone the project.

You must have Node.js and its package manager (npm) installed.

Also few npm packages must be installed on your system globally to build the project:

* `npm install -g bower`
* `npm install -g gulp`
* `npm install -g grunt-cli`
* `npm install -g http-server`
* `npm install -g protractor`

### Clone project

	git clone https://github.com/knikolaenko-elinext/gemini.git
	cd gemini
	
### Install Dependencies

	npm install
	
That will download npm and bower dependencies in `node_modules` and `app/bower_components` respectively

### Run the Application

	npm start
	
Now browse to the app at `http://localhost:9000/`

### End to end testing

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

```
npm start
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.