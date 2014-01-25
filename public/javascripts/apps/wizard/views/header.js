define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){

		Views.Header = Marionette.ItemView.extend({

			// Properties

			template: templates.header,

			// Backbone.Marionette

			initialize: function(options) {
				var options = options || {};
				
				this.stepNumber = options.stepNumber || 0;
				this.title = options.title || 'Loading Steps...';
				this.shortDescription = options.shortDescription;
			},

			// fake model
			serializeData: function(){
				return {
					title: this.title,
					stepNumber: this.stepNumber,
					shortDescription: this.shortDescription
				};
			},

			// Rendering

			onRender: function() {
			}

			// UI Events

			// Backbone Events

			// Methods
			
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Header;
});