/**
 * Module dependencies
 */

 module.exports = function (Mongoose) {

	var Schema = Mongoose.Schema;

	Mongoose.model('course', new Schema({

		name: { type: String, default: '', required: true },
		description: { type: String },
		categories: { type: String },
		categoriesNumber: {type: Number }

	}, { collection: 'courses' }));

	return Mongoose.model('course');
};

// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema,
// 	_ = require('lodash');

// /**
//  * Course Schema
//  */

// var CourseSchema = new Schema({

// }, {
// 	collection: 'courses'
// });

// /**
//  * Virtuals
//  */

// /**
//  * Validations
//  */

//  /**
//   * Pre-save hook
//   */

//  /**
//   * Methods
//   */