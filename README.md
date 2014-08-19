[![Stories in Ready](https://badge.waffle.io/alexanderjfink/universaldesignbootstrap.png?label=ready&title=Ready)](https://waffle.io/alexanderjfink/universaldesignbootstrap)
UniversalDesignBootstrap
========================

Open source, opinionated, course design and development using Universal Design for Learning (UDL) principles.

NOTE: Currently doesn't do anything -- in development. Do not attempt to use.

## Project Goals
Make Universal Design for Learning (UDL) more..., well..., universal. UDL approaches to developing courses/workshops/onboarding processes/trainings have been rapidly adopted in relevant scholarly and practitioner communities, but largely ignored by the swathes of folks engaged in doing most of the course creation. This tool will help make this more possible by:

- Providing an easy to use course design wizard that:
	- Guides a step by step process of course creation using backwards-design principles (aims, then activities and assessments)
	- Teaches users about UDL principles as it proceeds
	- Provides numerous examples at each step of the way to assist in learning
	- Provide template/commonly used aims, activities, assessments, and policies that encourage UDL
	- Develop modular, re-usable code
- Export designed courses into a final text editor for editing
- Allow designed courses to be published in multiple formats: PDF, DocX, HTML, LaTeX
- Eventually allow export of courses into course platforms like Moodle

## Application Structure

- public
	- fonts
	- images
	- javascripts
		- app
			- common
			- config
			- docGenerator
			- interface
			- wizard
				- collections
				- controllers
				- models
				- routers
				- templates
				- views
				config.js 		provides schema definition for wizard steps
				module.js 		serves as the module main for each module
				templates.js 	specifies templates present in module
		- tests
		- vendor
	- stylesheets

## Modules

### wizard (reusable)
Uses schemas (from `backbone-forms`) defined on models (in any Marionette module) to generate a multi-step wizard as configured in `config.js`.

Config sets up the "steps" and associated models to go through, as well as options for each step (URL to fetch template data from, whether a step should be completed once, or can create multiple models, etc.). Models should be able to have 1:1 and 1:N relationships (using `backbone-association`) with other models, and wizard should handle this neatly.

Should eventually be able to load completed steps and re-start a users session based on current step.

User's models are responsible for storage.

### docGenerator (reusable)
Uses schema as defined in `config.js` to create a document in a Substance instance.

### interface
Main application interface to fill in navigation, render other modules, etc.

## The Stack

### Front-end Design/Templating
[Handlebars](http://handlebarsjs.ccom) + [Foundation5](http://foundation.zurb.com)

### Front-end JS Libraries
[Backbone-Forms](https://github.com/powmedia/backbone-forms) + [Backbone-Associations](https://github.com/dhruvaray/backbone-associations) + [JQueryUI](http://jqueryui.com)

### Front-end Foundations
[RequireJS](http://requirejs.org) + [Backbone](http://backbonejs.org) + [Backbone.Marionette](http://marionettejs.com) + [Backbone.Wreqr](https://github.com/marionettejs/backbone.wreqr) + [Lodash](http://lodash.com) + [JQuery](http://jquery.com)

### Backend Apps/Libraries
[HapiJS](http://hapijs.com) + [Handlebars](http://handlebarsjs.com)

### Backend Foundations
[Node.js](http://www.nodejs.org) + [RethinkDB](http://rethinkdb.com)