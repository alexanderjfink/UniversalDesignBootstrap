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
				// TODO: Make sure model is saved and validated
				UniversalDesignBootstrap.trigger('WizardModule:step:showStep', this.getCurrentStep());
			},

			showNextStep: function() {
				// Route to next step
				UniversalDesignBootstrap.trigger('WizardModule:step:showStep', (this.getCurrentStep() + 1));
			},

			// grab current step from the current route
			getCurrentStep: function() {
				return parseInt(UniversalDesignBootstrap.getCurrentRoute().split(['/'])[1]);
			}
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Footer;
});