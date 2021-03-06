// Init.js
// =======

require.config({

	// Sets the js folder as the base directory for all future relative paths
	baseUrl: "./javascripts",

	// 3rd party script alias names (Easier to type "jquery" than "vendor/jquery, etc")
	// probably a good idea to keep version numbers in the file names for updates checking
	paths: {

			// Core Libraries
			// ==============

			"jquery": "vendor/jquery/jquery",

			"underscore": "vendor/lodash/dist/lodash",

			"backbone": "vendor/backbone/backbone",

			"foundation": "vendor/foundation/js/foundation/foundation",

			// Plugins
			// =======

			"backbone.validateAll": "vendor/plugins/Backbone.validateAll",

			"text": "vendor/text/text",

			// Application Folders
			// ===================

			// Common

			"collections": "app/common/collections",

			"models": "app/common/models",

			"routers": "app/routers",

			"templates": "app/common/templates",

			"views": "app/common/views",

			"events": "app/events",

			// Sub apps

			"courseWizard": "app/courseWizard",

			"courseEditor": "app/courseEditor",

			"syllabusGenerator": "app/syllabusGenerator"

	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {

			// Bootstrap
			"bootstrap": ["jquery"],

			// Backbone
			"backbone": {

				// Depends on underscore/lodash and jQuery
				"deps": ["underscore", "jquery"],

				// Exports the global window.Backbone object
				"exports": "Backbone"

			},

			// Backbone.validateAll plugin that depends on Backbone
			"backbone.validateAll": ["backbone"]

	}

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/Router", "foundation", "backbone.validateAll"],

	function($, Backbone, Router) {

		// Instantiates a new Desktop Router instance
		new Router();

		setTimeout(function() {
			require(['foundation'], function (foundation) {
				$(document).foundation();
			});
		});
	}

);
