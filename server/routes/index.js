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

// module.exports = [
//     { method: 'GET', path: '/products', config: { handler: getProducts, query: { name: Types.String() } } },
//     { method: 'GET', path: '/products/{id}', config: { handler: getProduct } },
//     { method: 'POST', path: '/products', config: { handler: addProduct, payload: 'parse', schema: { name: Types.String().required().min(3) }, response: { id: Types.Number().required() } } }
// ];