var mongoose = require('mongoose'),
	_ = require('lodash'),
	Course = mongoose.model('Course');

var CourseController = {
	create: function(request, reply) {
	},

	read: function(request, reply) {
		if (request.params.id) {
			reply(Course.findById(request.params.id).exec());
		}
	},

	update: function(request, reply) {
			
	},

	delete: function(request, reply) {
		return Course.findByIdAndRemove(request.params.id).exec();
	}
};

exports = module.exports = CourseController;