define(['jquery', 'backbone'], function($, Backbone) {

	// Creates a new Backbone Model class object
	var instructorModel = Backbone.Model.extend({

		// Properties
		schema: {
			title: { type: 'Select', options: ['Professor','Dr','Mr', 'Mrs', 'Ms'] },
			name: 'Text',
			degrees: 'Text',
			email: { validators: ['required', 'email'] },
			address: { type: 'NestedModel', model: Address }
		},


		// Backbone

		url: '',


		// Model Constructor
		initialize: function() {

		},

		// Default values for all of the Model attributes
		defaults: {

		},

		// Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
		validate: function(attrs) {

		}
	});

	// Returns the Model class
	return instructorModel;
});