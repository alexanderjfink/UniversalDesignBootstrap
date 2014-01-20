define(['app','../controllers/index'],function(UniversalDesignBootstrap, Controller) {
	UniversalDesignBootstrap.module('Routers.WizardModule', function(WizardModuleRouter, UniversalDesignBootstrap, Backbone, Marionette, $, _) {
		// Marionette uses an AppRouter to drop in Controllers. Basically is Controller.method, i.e. '': 'showWizard' = Controller.showWizard
		WizardModuleRouter.Router = Marionette.AppRouter.extend({
			before: function () {
				App.startSubApp("WizardModule", {});
			},

			appRoutes:{
				'step/:stepNumber': 'showStep' // this should eventually change, but should for now basically serve as a forward to wizard
			}
		});

		UniversalDesignBootstrap.addInitializer(function() {
			new WizardModuleRouter.Router({
				controller: Controller
			});
		});
	});

	return UniversalDesignBootstrap.WizardModuleRouter;	
});