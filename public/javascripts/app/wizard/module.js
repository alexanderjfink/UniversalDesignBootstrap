define(['udbapp',
		'marionette',
		'vent',
		'collections/stepCollection',
		'views/header',
		'views/stepCompositeView',
		'views/footer'], function(UDBApp, marionette, vent, StepCollection, Header, StepCompositeView, Footer) {

	var wizardModule = UDBApp.module("Wizard"),
		steps = new StepCollection();

	wizardModule.set('startWithParent', false),

	// wizardModule.bindTo(steps, 'all', function() {
	// 	if (steps.length === 0) {
	// 		wizardModule.main.$el.hide();
	// 		wizardModule.footer.$el.hide();
	// 	} else {
	// 		wizardModule.main.$el.show();
	// 		wizardModule.footer.$el.show();
	// 	}
	// });

	wizardModule.addRegions({
		header: '#header',
		wizard: '#wizard',
		footer: '#footer'
	});

	// Vents

	wizardModule.vent.on('steps:filter',function(filter) {
		filter = filter || 'all';
		$('#todowizardModule').attr('class', 'filter-' + filter);
	});

	wizardModule.vent.on('steps:clear:completed',function(){
		function destroy(todo)     { todo.destroy(); }

		steps.getCompleted().forEach(destroy);
	});

	// Initializers

	wizardModule.addInitializer(function(){

		var viewOptions = {
			collection : steps
		};

		wizardModule.header.show(new Header(viewOptions));
		wizardModule.main.show(new StepCompositeView(viewOptions));
		wizardModule.footer.show(new Footer(viewOptions));

		steps.fetch();
	});

	// Finalizers

	wizardModule.addFinalizer(function(){
		MyApp.someRegion.close();
	});

	return wizardModule;

});