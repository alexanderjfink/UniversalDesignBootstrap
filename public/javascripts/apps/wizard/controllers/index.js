define(['app','vent'], function (UniversalDesignBootstrap, vent) {

	UniversalDesignBootstrap.module('WizardModule', function(WizardModule, UniversalDesignBootstrap, Backbone, Marionette, $, _) {

		WizardModule.Controller = {
			showStep : function(stepNumber) {
				require(['apps/wizard/views/header','apps/wizard/views/stepCompositeView'], function (Header, StepCompositeView) {
					// vent.trigger('WizardModule:step:showStep', !!stepNumber.trim() || 0);
					UniversalDesignBootstrap.header.show(new Header({stepNumber: stepNumber, title: 'Title'}));
					UniversalDesignBootstrap.main.show(new StepCompositeView({examples: 'Some example data goes here', otherResources: 'Some other resources data goes here'}));
				});
			}
		};

	});

	return UniversalDesignBootstrap.WizardModule.Controller;
	
});