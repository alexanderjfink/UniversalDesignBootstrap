define(['vent'], function (vent) {

	return {
		showWizard: function(stepNumber) {
			// send the step number that was requested
			vent.trigger('wizardModule:showWizard');
		}
	};

});