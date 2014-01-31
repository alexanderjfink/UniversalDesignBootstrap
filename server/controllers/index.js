var mongoose = require('mongoose'),
	_ = require('lodash');

var IndexController = {
	index: {
		handler: function (request, reply) {
			reply.view('index.hbs', {
				title: 'UniversalDesignBootstrap'
			});
		}
	}
};

exports = module.exports = IndexController;