// define(function(require) {
// 	// return {
// 	// 	activityModel: require('apps/common/models/activityModel'),
// 	// 	assessmentModel: require('apps/common/models/assessmentModel'),
// 	// 	courseModel: require('apps/common/models/courseModel'),
// 	// 	instructorModel: require('apps/common/models/instructorModel'),
// 	// 	outcomeModel: require('apps/common/models/outcomeModel'),
// 	// 	policyModel: require('apps/common/models/policyModel'),
// 	// 	sessionModel: require('apps/common/models/sessionModel'),
// 	// 	syllabusModel: require('apps/common/models/syllabusModel')
// 	// }

// 	// why are these two code segments acting differently?

// 	// should this work also with associated collections?

// 	var rootModelDir = 'apps/common/models/';

// 	var models = {
// 		activityModel: 'activityModel',
// 		assessmentModel: 'assessmentModel',
// 		courseModel: 'courseModel',
// 		instructorModel: 'instructorModel',
// 		outcomeModel: 'outcomeModel',
// 		policyModel: 'policyModel',
// 		sessionModel: 'sessionModel',
// 		syllabusModel: 'syllabusModel'
// 	}

// 	var modelSet = {}

// 	for (var model in models) {
// 		if (models.hasOwnProperty(model)) {
// 			console.log(rootModelDir + models[model]);
			
// 			// modelSet[model] = require(rootModelDir + models[model]);
// 		}
// 	}

// 	return modelSet;

// });