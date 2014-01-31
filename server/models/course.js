/**
 * Module dependencies
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	_ = require('lodash');

/**
 * Course Schema
 */

var CourseSchema = new Schema({
	name: { type: String, default: '', required: true },
	description: { type: String },
	categories: { type: String },
	categoriesNumber: {type: Number }
}, {
	collection: 'courses'
});

/**
 * Virtuals
 */

/**
 * Validations
 */

 /**
  * Pre-save hook
  */

 /**
  * Methods
  */

mongoose.model('course', CourseSchema);