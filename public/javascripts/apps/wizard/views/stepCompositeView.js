define(['require','app','hbs!../templates/stepCompositeView', 'forms','../config','underscore'], function (require, UniversalDesignBootstrap, stepCompositeViewTemplate, Forms, Models, _) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){
	
		Views.StepCompositeView = Marionette.CompositeView.extend({
			
			// Properties
			
			template: stepCompositeViewTemplate,
			// itemView: ItemView,
			// itemViewContainer : '#todo-list',

			// Backbone.Marionette

			initialize : function(options) {
				// this.bindTo(this.collection, 'all', this.updateToggleCheckbox, this)
				if (options.model) { 
					// pull in the required model
					this.FormModel = _.find(Models, function(obj) { return obj.model == options.model }).loadedModel;
				}
			},

			// fake model
			serializeData: function(){
			},

			events : {
			},

			// Rendering

			onRender : function() {
				// need to make a new one of these instances
				if (this.FormModel) {
					var formToModel = new this.FormModel();
				}

				// use Backbone-Forms to create a form from this Model instance
				var form = new Forms({
					model: formToModel
				}).render();

				this.$el.append(form.el);
			},

			// UI Events

			ui : {
				// toggle : '#toggle-all'
			}

			// Backbone Events

			// Methods
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.StepCompositeView;

});