// A collection of steps should have an ordered set of progressions.
// Should be steps, repetitions of steps, and next steps

define(['backbone','models/stepModel'],function(Backbone,StepModel) {
	'use strict';

	// Private methods
	
	// Returned Collection
	return Backbone.Collection.extend({
		model: StepModel,

		getCompleted: function() {
			return this.filter(isCompleted);
		},
		getActive: function() {
			return this.reject(isCompleted);
		},
		comparator: function( todo ) {
			return todo.get('created');
		}
	});

});