var hapi = require('hapi'),
		Types = require('hapi').Types,
		controllers = require('../controllers/index');

module.exports = [
	// server static publics
	{
		method: 'GET',
		path: '/{path*}',
		handler: {
			directory: {
				path: __dirname + '/../../public',
				listing: false,
				index: true
			}
		}
	},

	// main app route
	{
		method: 'GET',
		path: '/',
		config: controllers.index
	}
];