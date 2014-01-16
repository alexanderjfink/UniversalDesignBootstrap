requirejs.config({
	baseUrl: '/javascripts/vendor',
	paths: {
		app: '../app',
		text: 'requirejs-text/text',
		jquery: 'jquery/jquery',
		backbone: 'backbone/backbone',
		marionette: 'backbone.marionette/lib/core/amd/backbone.marionette',
		forms: 'backbone-forms/distribution.amd/backbone-forms',
		foundation: 'foundation/js/foundation',
		lodash: 'lodash/dist/lodash',
		rdust: 'require-dust/rdust',
		dust: 'dustjs-linkedin/dist/dust-full-2.2.3'
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
		},
		'marionette': {
			exports: 'Backbone.Marionette',
			deps: ['backbone']
		}
	}

});


// Currently just going to Wizard, but should go to "interface" eventually
require(['wizard/app','jquery','backbone','routers/wizard','wizard/controllers/index'],function(app,$,Backbone,Router,Controller){
	"use strict";

	app.start();
	
	new Router({
		controller : Controller
	});
	
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