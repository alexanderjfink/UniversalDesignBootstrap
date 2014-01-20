define(['app','vent'], function (UniversalDesignBootstrap, vent) {

	UniversalDesignBootstrap.module('WizardModule', function(WizardModule, UniversalDesignBootstrap, Backbone, Marionette, $, _) {

		WizardModule.Controller = {
			showStep : function(stepNumber) {
				require(['apps/wizard/config','apps/wizard/views/header','apps/wizard/views/stepCompositeView'], function (Steps, Header, StepCompositeView) {
					// vent.trigger('WizardModule:step:showStep', !!stepNumber.trim() || 0);
					UniversalDesignBootstrap.header.show(new Header({stepNumber: stepNumber, title: Steps[stepNumber].title, shortDescription: Steps[stepNumber].shortDescription}));
					UniversalDesignBootstrap.main.show(new StepCompositeView({model: Steps[stepNumber].model, examples: Steps[stepNumber].examples, otherResources: Steps[stepNumber].otherResources}));
				});
			}
		};

	});

	return UniversalDesignBootstrap.WizardModule.Controller;
	
});