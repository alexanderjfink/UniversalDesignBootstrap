define(['backbone'], function(Backbone) {
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			title: '', // Title of the Step
			completed: false, // Whether step has been completed yet
			shortDescription: '', // 2 sentence max description of step (Plain text)
			longDescription: '', // Long description of step (HTML)
			otherResources: '', // Links outward to other resources related to this step (HTML)
			model: '', // name of model -- MUST HAVE SCHEMA object defined re: backbone-forms
		},

		initialize : function() {
			if (this.isNew()) this.set('created', Date.now());
		},

		// toggle  : function() {
		// 	return this.set('completed', !this.get('completed'));
		// }
	});
});