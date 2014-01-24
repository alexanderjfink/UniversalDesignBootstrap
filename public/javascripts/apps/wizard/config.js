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
			'shortDescription': 'Short description',
			'longDescription': 'Long description goes here', 
			'examples': 'Examples are here for sure',
			'otherResources': '<a href="Resource1">Resource 1</a>', 
			'model': 'courseModel',

			'completed': false,
			'moreThanOne': false
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

	// perhaps this is bugging out b/c it is being executed too early? why here, but not in an object like below?
	for (var step in orderedSteps) {
		if (orderedSteps.hasOwnProperty(step)) {
			orderedSteps[step].loadedModel = require(rootModelDir + orderedSteps[step].model);
		}
	}

	return orderedSteps;

	// NO CONFIGURATION PAST THIS POINT

	// Load the models for the app based on specifications above

	// return {
	// 	activityModel: require('apps/common/models/activityModel'),
	// 	assessmentModel: require('apps/common/models/assessmentModel'),
	// 	courseModel: require('apps/common/models/courseModel'),
	// 	instructorModel: require('apps/common/models/instructorModel'),
	// 	outcomeModel: require('apps/common/models/outcomeModel'),
	// 	policyModel: require('apps/common/models/policyModel'),
	// 	sessionModel: require('apps/common/models/sessionModel'),
	// 	syllabusModel: require('apps/common/models/syllabusModel')
	// }
});