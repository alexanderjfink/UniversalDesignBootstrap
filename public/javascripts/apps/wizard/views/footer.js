define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, ContactManager, Backbone, Marionette, $, _){

		Views.Footer = Marionette.ItemView.extend({
			template : templates.footer
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Footer;
});