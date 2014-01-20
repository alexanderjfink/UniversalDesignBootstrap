define(['require','app','hbs!../templates/stepCompositeView', 'forms','../config/models'], function (require, UniversalDesignBootstrap, stepCompositeViewTemplate, Forms, Models) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){
	
		Views.StepCompositeView = Marionette.CompositeView.extend({
			template: stepCompositeViewTemplate,
			// itemView: ItemView,
			// itemViewContainer : '#todo-list',

			ui : {
				// toggle : '#toggle-all'
			},

			events : {
				// 'click #toggle-all' : 'onToggleAllClick'
			},

			initialize : function(options) {
				// this.bindTo(this.collection, 'all', this.updateToggleCheckbox, this);
				this.example = options.example;
				this.otherResources = options.otherResources;

				if (options.model) { // pull in the required model
					this.formModel = Models[options.model];
				}
			},

			// fake model
			serializeData: function(){
				return {
					example: this.example,
					otherResources: this.otherResources
				}
			},


			onRender : function() {
				// need to make a new one of these instances
				var formToModel = new this.formModel();

				// use Backbone-Forms to create a form from this Model instance
				var form = new Forms({
					model: formToModel
				}).render();

				this.$el.append(form.el);
			},

			updateToggleCheckbox : function() {
				// function reduceCompleted(left, right) { return left && right.get('completed'); }
				// var allCompleted = this.collection.reduce(reduceCompleted,true);
				// this.ui.toggle.prop('checked', allCompleted);
			},

			onToggleAllClick : function(evt) {
				// var isChecked = evt.currentTarget.checked;
				// this.collection.each(function(todo){
				//   todo.save({'completed': isChecked});
				// });
			}
		});

	});

	return UniversalDesignBootstrap.WizardModule.Views.StepCompositeView;

});