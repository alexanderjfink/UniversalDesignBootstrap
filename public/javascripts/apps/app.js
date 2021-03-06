define(['marionette','vent'], function (Marionette, vent) {

	// set up the app instance
	var UniversalDesignBootstrap = new Marionette.Application();

	// App Configuration

	// configuration, setting up regions, etc ... - for the whole application, needs to use modules
	UniversalDesignBootstrap.addRegions({
		header: '.header',
		main: '.main',
		footer: '.footer'
	});

	// App Methods

	UniversalDesignBootstrap.navigate = function(route,  options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	UniversalDesignBootstrap.getCurrentRoute = function(){
		return Backbone.history.fragment
	};

	UniversalDesignBootstrap.startSubApp = function(appName, args){
		var currentApp = appName ? UniversalDesignBootstrap.module(appName) : null;
		if (UniversalDesignBootstrap.currentApp === currentApp){ return; }

		if (UniversalDesignBootstrap.currentApp){
		  UniversalDesignBootstrap.currentApp.stop();
		}

		UniversalDesignBootstrap.currentApp = currentApp;
		if(currentApp){
		  currentApp.start(args);
		}
	};

	// App Events

	UniversalDesignBootstrap.on("initialize:after", function(){
		if(Backbone.history){

			// This will later need to change, shouldn't be attached to Wizard
			require(['apps/wizard/module','apps/wizard/routers/index'], function () {
				Backbone.history.start();

				UniversalDesignBootstrap.startSubApp('WizardModule');

				if(UniversalDesignBootstrap.getCurrentRoute() === ''){
					UniversalDesignBootstrap.trigger('WizardModule:step:showStep');
				}
			});
		}
	});
	
	// export the app from this module
	return UniversalDesignBootstrap;
});