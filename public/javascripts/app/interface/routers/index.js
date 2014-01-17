define(['marionette','wizard/module'],function(marionette) {

	// Marionette uses an AppRouter to drop in Controllers. Basically is Controller.method, i.e. '': 'showWizard' = Controller.showWizard
	return marionette.AppRouter.extend({
		before: function () {
			App.startSubApp("Wizard", {});
		},

		appRoutes:{
			'/wizard': 'showWizard' // this should eventually change, but should for now basically serve as a forward to wizard
		}
	});
	
});