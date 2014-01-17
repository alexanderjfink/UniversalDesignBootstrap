define(['udbapp',
		'marionette',
		'vent',
		'app/wizard/config',
		'app/wizard/views/header',
		'app/wizard/views/stepCompositeView',
		'app/wizard/views/footer'], function(UDBApp, marionette, vent, steps, Header, StepCompositeView, Footer) {

	var wizardModule = UDBApp.module("Wizard");

	wizardModule.set('startWithParent', false),

	//	wizardModule.bindTo(steps, 'all', function() {
	//		if (steps.length === 0) {
	//			wizardModule.main.$el.hide();
	//			wizardModule.footer.$el.hide();
	//		} else {
	//			wizardModule.main.$el.show();
	//			wizardModule.footer.$el.show();
	//		}
	//	});

	wizardModule.addRegions({
		header: '#header',
		wizard: '#wizard',
		footer: '#footer'
	});

	// Vents
	vent.on('wizardModule:steps:showStep', function(stepNumber) {
		stepNumber = stepNumber || 0;
	});

	vent.on('wizardModule:steps:nextStep', function(nextStep) {
		//	if nextStep isn't a step, go to step 1
		//	eventually this should pull wherever the user left off by some smart algorithm and decide which step to bring them to
		nextStep = nextStep || 0;
	});

	vent.on('wizardModule:steps:prevStep', function(prevStep) {
		prevStep = prevStep || 0;
	});

	vent.on('wizardModule:steps:addAnother', function(addAnother) {
		// here we are getting whatever model "another" is and adding more!
	});

	vent.on('wizardModule:steps:delModel', function(delModel) {

	});

	//	wizardModule.vent.on('steps:filter',function(filter) {
	//		filter = filter || 'all';
	//		$('#todowizardModule').attr('class', 'filter-' + filter);
	//	});

	//	wizardModule.vent.on('steps:clear:completed',function(){
	//		function destroy(todo)     { todo.destroy(); }

	//		steps.getCompleted().forEach(destroy);
	//	});

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
		wizardModule.header.close();
		wizardModule.wizard.close();
		wizardModule.footer.close();
	});

	return wizardModule;

});