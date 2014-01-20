define(['app',
		'vent',
		'./config',
		'./views/header',
		'./views/stepCompositeView',
		'./views/footer'], 
		function(UniversalDesignBootstrap, vent, steps, Header, StepCompositeView, Footer) {

	UniversalDesignBootstrap.module("WizardModule", function(WizardModule, UniversalDesignBootstrap, Backbone, Marionette, $, _) {
		WizardModule.startWithParent = true;

		WizardModule.onStart = function(){
			console.log("starting WizardModule");
		};

		WizardModule.onStop = function(){
			console.log("stopping WizardModule");
		};

		// //	WizardModule.bindTo(steps, 'all', function() {
		// //		if (steps.length === 0) {
		// //			WizardModule.main.$el.hide();
		// //			WizardModule.footer.$el.hide();
		// //		} else {
		// //			WizardModule.main.$el.show();
		// //			WizardModule.footer.$el.show();
		// //		}
		// //	});
	

		// WizardModule.addRegions({
		// 	header: '#header',
		// 	wizard: '#wizard',
		// 	footer: '#footer'
		// });

		// // Vents
		vent.on('WizardModule:step:showStep', function(stepNumber) {
			stepNumber = stepNumber || 0;
		});

		vent.on('WizardModule:steps:nextStep', function(nextStep) {
			//	if nextStep isn't a step, go to step 1
			//	eventually this should pull wherever the user left off by some smart algorithm and decide which step to bring them to
			nextStep = nextStep || 0;
		});

		vent.on('WizardModule:steps:prevStep', function(prevStep) {
			prevStep = prevStep || 0;
		});

		vent.on('WizardModule:steps:addAnother', function(addAnother) {
			// here we are getting whatever model "another" is and adding more!
		});

		vent.on('WizardModule:steps:delModel', function(delModel) {

		});

		// Initializers

		WizardModule.addInitializer(function(){
			var viewOptions = {
				// collection : steps
			};

			UniversalDesignBootstrap.header.show(new Header(viewOptions));
			UniversalDesignBootstrap.main.show(new StepCompositeView(viewOptions));
			UniversalDesignBootstrap.footer.show(new Footer(viewOptions));

			// steps.fetch();
		});

		// // Finalizers

		// WizardModule.addFinalizer(function(){
		// 	WizardModule.header.close();
		// 	WizardModule.wizard.close();
		// 	WizardModule.footer.close();
		// });

	});

	return UniversalDesignBootstrap.WizardModule;

});