define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, ContactManager, Backbone, Marionette, $, _){

		Views.Footer = Marionette.ItemView.extend({
			// Properties

			template : templates.footer,

			// Backbone.Marionette

			initialize: function(options) {
				var options = options || {};
				
				this.addAnother = this.addAnother || false;
			},

			// fake model
			serializeData: function(){
				return {
					addAnother: this.addAnother
				};
			},

			events: {
				'click .add-another': 'onButtonPressAddAnother',
				'click .next-step': 'onButtonPressNextStep'
			},

			// Rendering
			
			onRender: function () {

			},

			// UI Events

			ui: {

			},

			onButtonPressAddAnother: function(evt) {
				this.addAnother();
			},

			onButtonPressNextStep: function(evt) {
				this.showNextStep();
			},

			// Backbone Events

			// Methods

			addAnother: function() {

			},

			showNextStep: function() {


				// Route to next step
				currentStepNumber = UniversalDesignBootstrap.getCurrentRoute().split(['/'])[1];
				UniversalDesignBootstrap.trigger("WizardModule:step:showStep", (parseInt(currentStepNumber) + 1));
			}
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Footer;
});