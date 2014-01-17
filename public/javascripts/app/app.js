define(['marionette',
		'interface/routers/index', // Use interface routers/controllers to drive the basic application
		'interface/controllers/index'], function (Marionette, Router, Controller) {

    // set up the app instance
    var UDBApp = new Marionette.Application();

	// configuration, setting up regions, etc ... - for the whole application, needs to use modules

	// Routers

	UDBApp.addInitializer(function() {
		// Must create primary router with primary controller - comes from interface module	
		new Router({
			controller : Controller
		});
	});

    

    // export the app from this module
    return UDBApp;
});