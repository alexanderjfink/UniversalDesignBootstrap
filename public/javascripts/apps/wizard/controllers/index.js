define(['app','vent'], function (UniversalDesignBootstrap, vent) {

	UniversalDesignBootstrap.module('WizardModule', function(WizardModule, UniversalDesignBootstrap, Backbone, Marionette, $, _) {

		WizardModule.Controller = {
			showStep : function(stepNumber) {
				// send the step number that was requested
				require(['../views/header','../views/stepCompositeView'], function (Views, StepCompositeView) {
					vent.trigger('WizardModule:step:showStep', stepNumber.trim() || '');
					UniversalDesignBootstrap.header.show(new Views.Header({stepNumber: stepNumber}));
				});
			}
		};

	});

	return UniversalDesignBootstrap.WizardModule.Controller;
	
});