// DEPENDENCIES
// ============

var Config = global.Config = require('./config/config.js').config;
		ipAddress = ( Config.IP || '0.0.0.0' ),
		port = ( parseInt(process.env.PORT) || Config.listenPort ),
		cons = require('consolidate'),
		Hapi = require('hapi'),
		r = require('rethinkdb'),

		routes = require('./routes');

// DATABASE CONFIGURATION
// ======================

// Connect to Database
var connection = null,
		dbConfig = {
			host: process.env.RDB_HOST || Config.database.IP, 
			port: parseInt(process.env.RDB_PORT) || Config.database.port,
			db: process.env.RDB_DB || Config.database.name,
			tables: {
				'activities': 'id',
				'assessments': 'id',
				'courses': 'id',
				'instructors': 'id',
				'outcomes': 'id',
				'policies': 'id',
				'sessions': 'id',
				'syllabi': 'id',
				'users'
			}
		};

r.connect(dbConfig, function (err, conn) {
		if (err) throw err;
		connection = conn;
		console.log('Connected to RethinkDB database ' + dbConfig.db + ' at ' + dbConfig.host + ':' + dbConfig.port);
});

// DATABASE SCHEMAS
// ================

// var schema = require('./schemas/schema');

// SERVER CONFIGURATION
// ====================

var options = {
	views: {
		path: __dirname + '/templates',
		partialsPath: __dirname + '/templates/partials',
		engines: {
			hbs: 'handlebars'
		}
	}
}

var server = Hapi.createServer(ipAddress, port, options);

// Drop in routes...
server.route(routes);

server.start(function() {
	console.log('\n\nWelcome to UniversalDesignBootstrap!\n\nPlease go to http://' + ipAddress + ':' + port + ' to start using the app\n\n');
});