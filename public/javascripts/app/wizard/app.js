/*global $*/

define(['marionette',
		'vent',
		'collections/stepCollection',
		'views/header',
		'views/stepCompositeView',
		'views/footer'], function(marionette, vent, StepCollection, Header, StepCompositeView, Footer) {

		"use strict";

		// Eventually the app piece should get dumped down to the main /app folder, this should just be a module
		var app = new marionette.Application(),
			steps = new StepCollection();

		// Wizard should be a Marionette module
		app.Module('wizard', {
			startWithParent: false,
			define: function() {

				app.bindTo(steps, 'all', function() {
					if (steps.length === 0) {
						app.main.$el.hide();
						app.footer.$el.hide();
					} else {
						app.main.$el.show();
						app.footer.$el.show();
					}
				});

				app.addRegions({
					header: '#header',
					wizard: '#wizard',
					footer: '#footer'
				});

				app.addInitializer(function(){

					var viewOptions = {
						collection : steps
					};

					app.header.show(new Header(viewOptions));
					app.main.show(new StepCompositeView(viewOptions));
					app.footer.show(new Footer(viewOptions));

					steps.fetch();
				});


				app.vent.on('steps:filter',function(filter) {
					filter = filter || 'all';
					$('#todoapp').attr('class', 'filter-' + filter);
				});

				app.vent.on('steps:clear:completed',function(){
					function destroy(todo)     { todo.destroy(); }

					steps.getCompleted().forEach(destroy);
				});
			}
		});

		return app;

	}
);