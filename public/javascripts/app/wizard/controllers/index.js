define(['vent'], function (vent) {

	return {
		step : function(stepNumber) {
			// send the step number that was requested
			vent.trigger('wizardModule:step:showStep', stepNumber.trim() || '');
		}
	};

});