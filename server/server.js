// DEPENDENCIES
// ============

var Config = global.Config = require('./config/config.js').config;
    port = ( process.env.PORT || Config.listenPort ),
    cons = require('consolidate'),
    Hapi = require('hapi'),
    r = require('rethinkdb');
    // API = require('./API');

// DATABASE CONFIGURATION
// ======================

// Connect to Database
var connection = null;
r.connect({host: Config.database.IP, port: Config.database.port}, function (err, conn) {
  if (err) throw err;
  connection = conn;
  console.log('Connected to RethinkDB at ' + Config.database.IP + ':' + Config.database.port);
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

var server = Hapi.createServer(Config.IP, Config.listenPort, options);

var index = {
  handler: function (request, reply) {
    reply.view('index.hbs', {title: 'UniversalDesignBootstrap'});
  }
};

// server static publics
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: __dirname + '/../public',
      listing: false,
      index: true
    }
  }
});

// app routes
server.route({
  method: 'GET',
  path: '/',
  config: index
});

server.start(function() {
  console.log('\n\nWelcome to UniversalDesignBootstrap!\n\nPlease go to http://localhost:' + port + ' to start using the app\n\n');
});

// API
// ===

// API.api(server, schema);

