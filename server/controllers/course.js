var _ = require('lodash')
,   Restify = require('hapi-restify');

var CourseController = module.exports = function CourseController() {
  Restify.Controller.prototype.constructor.apply(this, arguments);
};

_.extend(
  CourseController.prototype,
  Restify.Controller.prototype
);

_.extend(
  CourseController.prototype,
  {
    init: function () {
      Restify.Controller.prototype.init.call(this);
      this.app.routes.push({
        method: 'GET', path: '/' + this.name + '/top',
        config: { handler: this.getTopCourses.bind(this) }
      });
    },

    getTopCourses: function (request) {
      this.model.find({})
        .sort({'views': -1 })
        .exec(function(err, model) {
          request.reply(err || model);
        });
    }
  }
);