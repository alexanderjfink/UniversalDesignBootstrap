requirejs.config({
	baseUrl: '/javascripts/vendor',
	paths: {

		// App related paths

		app: '../app',
		udbapp: '../app/app',
		vent: '../app/vent',

		// Major deps paths

		text: 'requirejs-text/text',
		jquery: 'jquery/jquery',
		lodash: 'lodash/dist/lodash',

		// Backbone & plugins

		backbone: 'backbone/backbone', // Backbone and plugins
		marionette: 'backbone.marionette/lib/core/amd/backbone.marionette',
		forms: 'backbone-forms/distribution.amd/backbone-forms',
		
		// Templates / Design

		dust: 'dustjs-linkedin/dist/dust-full-2.2.3',
		rdust: 'require-dust/rdust', // Use dust for templating
		foundation: 'foundation/js/foundation' // Use Foundation5 for CSS/JS templates
	},
	shim: {
		'backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['lodash', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		},
		'lodash': {
			exports: '_'
		}
		//	Perhaps don't need shim because loading from an AMD dist of Marionette
		//	'marionette': {
		//		deps : ['jquery', 'lodash', 'backbone'],
		//		exports: 'Backbone.Marionette'
		//	}
	}

});

require(['jquery',
		'backbone',
		'udbapp'], function($, Backbone, UDBApp){

	// Start Marionette application (as defined in app/app.js)
	UDBApp.start();

	// This makes links hit the router instead of redirecting
	$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
		// Get the absolute anchor href.
		var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
		// Get the absolute root.
		var root = location.protocol + "//" + location.host;// + app.root;

		// Ensure the root is part of the anchor href, meaning it's relative.
		if (href.prop.slice(0, root.length) === root) {
			// Stop the default event to ensure the link will not cause a page
			// refresh.
			evt.preventDefault();

			// `Backbone.history.navigate` is sufficient for all Routers and will
			// trigger the correct events. The Router's internal `navigate` method
			// calls this anyways. The fragment is sliced from the root.
			Backbone.history.navigate(href.attr, true);
		}
	});
});