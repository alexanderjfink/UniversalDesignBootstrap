define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){

		Views.Header = Marionette.ItemView.extend({
			template: templates.header,

			initialize: function(options) {
				var options = options || {};
				
				this.stepNumber = options.stepNumber || 0;
				this.title = options.title || 'Loading Steps...';
			},

			// fake model
			serializeData: function(){
				return {
					title: this.title,
					stepNumber: this.stepNumber
				}
			},

			onRender: function() {
			}
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Header;
});