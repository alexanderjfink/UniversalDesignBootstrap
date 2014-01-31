// DEPENDENCIES
// ============

var	env = process.env.NODE_ENV || 'development',
	Config = global.Config = require('./config/config.js').config[env];
	ipAddress = ( Config.app.host || '0.0.0.0' ),
	port = ( parseInt(process.env.PORT) || Config.app.port ),
	cons = require('consolidate'),
	Hapi = require('hapi'),
	Restify = require('hapi-restify'),
	mongoose = require('mongoose');

// DATABASE CONFIGURATION
// ======================

// Bootstrap db connection
// mongoose.connect(Config.db);

// Bootstrap models
// require('./models')();

// SERVER CONFIGURATION
// ====================

Config.app.options = {
	views: {
		path: __dirname + '/templates',
		partialsPath: __dirname + '/templates/partials',
		engines: {
			hbs: 'handlebars'
		}
	}
}

var myApp = Restify.createApplication(Config, function() {
	myApp.start(function () {
		console.log('\n\nWelcome to UniversalDesignBootstrap!\n\nPlease go to http://' + ipAddress + ':' + port + ' to start using the app\n\n');
	});
});
	
	// server = Hapi.createServer(ipAddress, port, options),
	// routes = require(__dirname + '/routes');

// Drop in routes...
// server.route(routes);

// server.start(function() {
	
// });