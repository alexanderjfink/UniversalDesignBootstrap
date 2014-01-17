define(['marionette'],function(marionette) {

	return marionette.AppRouter.extend({
		appRoutes:{
			'wizard': 'showWizard'
		}
	});
	
});