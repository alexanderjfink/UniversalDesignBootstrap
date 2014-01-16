define(["jquery", "backbone", "courseWizard/models/stepModel", "text!courseWizard/templates/wizard.html"],

	function($, Backbone, Model, template){

		var wizardView = Backbone.View.extend({
			// Properties

			// The DOM Element associated with this view
			el: ".magic",
			
			// Backbone

			// View Event Handlers
			events: {

			},
			// View constructor
			initialize: function() {

				// Calls the view's render method
				this.render();

			},

			// Bootstrap

			bootstrap: function () {
				// All Backbone AJAX opertaions return the jqXHR object which implements the promise API
				// This is silent because we're binding to add events to re-render later.  Forgetting it
				// will cause the view to render once for every model in the collection.
				this.collection.fetch({ silent: true }).then(this.render);
			},

			// Rendering

			// Renders the view's template to the UI
			render: function() {

				// Setting the view's template property using the Underscore template method
				this.template = _.template(template, {});

				// Dynamically updates the UI with the view's template
				this.$el.html(this.template);

				// Maintains chainability
				return this;

			}

			// UI events

			// Backbone events

			// Methods

		});

		// Returns the View class
		return wizardView;

	}

);