define(['app','hbs!../templates/stepCompositeView'], function (UniversalDesignBootstrap, stepCompositeViewTemplate) {
	UniversalDesignBootstrap.module('WizardModule.Views', function(Views, UniversalDesignBootstrap, Backbone, Marionette, $, _){
	
		Views.StepCompositeView = Marionette.CompositeView.extend({
			template: stepCompositeViewTemplate,
			// itemView: ItemView,
			// itemViewContainer : '#todo-list',

			ui : {
				// toggle : '#toggle-all'
			},

			events : {
				'click #toggle-all' : 'onToggleAllClick'
			},

			initialize : function() {
				// this.bindTo(this.collection, 'all', this.updateToggleCheckbox, this);
			},

			// fake model
			serializeData: function(){
				return {
					title: this.example,
					stepNumber: this.otherResources
				}
			},


			onRender : function() {
				// this.updateToggleCheckbox();
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