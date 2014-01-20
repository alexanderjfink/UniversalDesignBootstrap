define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, ContactManager, Backbone, Marionette, $, _){

		Views.Header = Marionette.ItemView.extend({
			template : templates.header
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Header;
});