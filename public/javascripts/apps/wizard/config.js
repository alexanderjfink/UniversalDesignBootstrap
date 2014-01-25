define(function (require) {

	var rootModelDir = 'apps/common/models/';

	// TEMPLATE
	// title: '', // Title of the Step
	// completed: false, // Whether step has been completed yet
	// shortDescription: '', // 2 sentence max description of step (Plain text)
	// longDescription: '', // Long description of step (HTML)
	// otherResources: '', // Links outward to other resources related to this step (HTML)
	// model: '' // name of model -- MUST HAVE SCHEMA object defined re: backbone-forms

	// Ordered array of Steps
	var orderedSteps = [
		{
			'title': 'General Course Settings', 
			'shortDescription': 'A few general overview details for your course.',
			'longDescription': 'Long description goes here', 
			'examples': 'Examples are here for sure',
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'courseModel',

			'completed': false,
			'moreThanOne': false //  probably should just replace this with collections?
		},
		{
			'title': 'Outcomes', 
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'outcomeModel',
			
			'completed': false,
			'moreThanOne': true
		},
		{
			'title': 'Sessions', 
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'sessionModel',
			
			'completed': false,
			'moreThanOne': true
		},
		{
			'title': 'Activities', 
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'activityModel',
			
			'completed': false,
			'moreThanOne': true
		},		
		{
			'title': 'Assessments', 
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'assessmentModel',
			
			'completed': false,
			'moreThanOne': true
		},		
		{
			'title': 'Instructors', 
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'instructorModel',
			
			'completed': false,
			'moreThanOne': true
		}		
	];


	// NO CONFIGURATION PAST THIS POINT

	orderedSteps.forEach(function(step) {
		require([rootModelDir + step.model], function(model) {
			step.loadedModel = model;
		});
	});

	return orderedSteps;

});