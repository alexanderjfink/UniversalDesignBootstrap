define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, ContactManager, Backbone, Marionette, $, _){

		Views.Footer = Marionette.ItemView.extend({
			template : templates.footer,

			ui: {

			},

			events: {
				'click .add-another': 'onButtonPressAddAnother',
				'click .next-step': 'onButtonPressNextStep'
			},

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


			// ui methods
			onButtonPressAddAnother: function(evt) {
				this.addAnother();
			},

			onButtonPressNextStep: function(evt) {
				this.showNextStep();
			},

			// methods
			addAnother: function() {

			},

			showNextStep: function() {
				currentStepNumber = UniversalDesignBootstrap.getCurrentRoute().split(['/'])[1];

				UniversalDesignBootstrap.trigger("WizardModule:step:showStep", (parseInt(currentStepNumber) + 1));
			}
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Footer;
});