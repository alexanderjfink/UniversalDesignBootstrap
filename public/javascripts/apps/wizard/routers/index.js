define(['app'],function(UniversalDesignBootstrap) {
	UniversalDesignBootstrap.module('Routers.WizardModule', function(WizardModuleRouter, UniversalDesignBootstrap, Backbone, Marionette, $, _) {

		// Marionette uses an AppRouter to drop in Controllers. Basically is Controller.method, i.e. '': 'showWizard' = Controller.showWizard
		WizardModuleRouter.Router = Marionette.AppRouter.extend({
			before: function () {
				App.startSubApp('WizardModule', {});
			},

			appRoutes:{
				'': 'showStep',
				'step/:stepNumber': 'showStep'
			}
		});

		// Always check that WizardModule is started and do any necessary surrounding updates for general action execution in this module
		var executeAction = function(action, arg) {
			UniversalDesignBootstrap.startSubApp("WizardModule");
			action(arg);
			// UniversalDesignBootstrap.execute("set:active:header", "contacts");
		};


		// Public API for this Modules' routing
		var API = {
			
			// shows whatever step should be shown in url #step/:stepNumber
			showStep: function(stepNumber){
				require(['../apps/wizard/controllers/index'], function(WizardController) {
					if (!stepNumber) {
						stepNumber = 0;
					}

					UniversalDesignBootstrap.navigate('step/' + stepNumber);
					executeAction(WizardController.showStep, stepNumber);
				});
			},

			// add another model for the same collection
			addAnother: function(stepNumber) {
				require(['../apps/wizard/controllers/index'], function(WizardController) {

				});
			}
		};

		// Global events that can be triggered in this module
		UniversalDesignBootstrap.on('WizardModule:step:showStep', function(stepNumber) {
			UniversalDesignBootstrap.navigate('step/' + stepNumber);
			API.showStep(stepNumber);
		});


		// Setup the Marionette controller
		UniversalDesignBootstrap.addInitializer(function() {
			new WizardModuleRouter.Router({
				controller: API
			});
		});
	});

	return UniversalDesignBootstrap.WizardModuleRouter;	
});