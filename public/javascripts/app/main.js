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
		underscore: 'lodash/dist/lodash', // loading lodash, but apparently need to pretend it is underscore

		// Backbone & plugins

		backbone: 'backbone/backbone', // Backbone and plugins
		marionette: 'backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr': 'backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter': 'backbone.babysitter/lib/amd/backbone.babysitter',
		forms: 'backbone-forms/distribution.amd/backbone-forms',
		
		// Templates / Design
		handlebars: 'handlebars/handlebars.amd',
		hbs: 'require-handlebars-plugin/hbs', // for tempalting
		foundation: 'foundation/js/foundation' // Use Foundation5 for CSS/JS templates
	},
	shim: {
		'backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
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