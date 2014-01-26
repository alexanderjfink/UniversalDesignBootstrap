/**
 * Module dependencies
 */

var r = require('rethinkdb'),
	Schema = require('jugglingdb').Schema,
	_ = require('lodash');

/**
 * Course Schema
 */

var CourseSchema = new Schema({
	name: { type: String, default: '', required: true },
	description: { type: Schema.Text },
	categories: String,
	categoriesNumber: Number,
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