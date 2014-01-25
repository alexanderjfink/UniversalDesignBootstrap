define(['app','../templates'], function (UniversalDesignBootstrap, templates) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){

		Views.Header = Marionette.ItemView.extend({

			// Properties

			template: templates.header,

			// Backbone.Marionette

			initialize: function(options) {
				var options = options || {};
				
				this.stepNumber = options.stepNumber || 0;
				this.title = options.title || 'Loading Steps...';
				this.shortDescription = options.shortDescription;
				this.example = options.example;
				this.otherResources = options.otherResources;
			},

			// fake model
			serializeData: function() {
				return {
					title: this.title,
					stepNumber: this.stepNumber,
					shortDescription: this.shortDescription,
					example: this.example,
					otherResources: this.otherResources
				};
			},

			events: {
				'click .instructions': 'onClickShowrevealModal',
				'click .close-reveal-modal': 'onClickCloseRevealModal'
			},

			// Rendering

			onRender: function() {
			},

			// UI Events

			onClickShowrevealModal: function(evt) {
				$('#instructionsModal').foundation('reveal','open');
			},
			onClickCloseRevealModal: function(evt) {
				$('#instructionsModal').foundation('reveal','close');
			}

			// Backbone Events

			// Methods
			
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.Header;
});