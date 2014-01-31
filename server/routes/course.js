var hapi = require('hapi'),
	Types = require('hapi').Types,
	controller = require('../controllers/course');

module.exports = [
	{
		method: 'GET',
		path: '/courses',
		config: {
			handler: controller.read
		}
	},
	{
		method: 'GET',
		path: '/courses/{id}',
		config: {
			handler: controller.read
		}
	},
	{
		method: 'POST',
		path: '/courses',
		config: {
			handler: controller.create
		}
	},
	{
		method: 'POST',
		path: '/courses/{id}',
		config: {
			handler: controller.delete
		}
	}
];

// module.exports = [
//     { method: 'GET', path: '/products', config: { handler: getProducts, query: { name: Types.String() } } },
//     { method: 'GET', path: '/products/{id}', config: { handler: getProduct } },
//     { method: 'POST', path: '/products', config: { handler: addProduct, payload: 'parse', schema: { name: Types.String().required().min(3) }, response: { id: Types.Number().required() } } }
// ];