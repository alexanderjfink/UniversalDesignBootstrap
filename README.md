UniversalDesignBootstrap
========================

Bootstrap of Higher Education Level Syllabus using Universal Course Design for Learning

NOTE: Currently doesn't do anything -- in development. Do not attempt to use.

## Project Goals

## Data Schema

## Sub Apps

### wizard (reusable)
Uses schemas (from `backbone-forms`) defined on models (in any Marionette module) to generate a multi-step wizard as configured in `config.js`.

Config sets up the "steps" and associated models to go through, as well as options for each step (URL to fetch template data from, whether a step should be completed once, or can create multiple models, etc.). Models should be able to have 1:1 and 1:N relationships (using `backbone-association`) with other models, and wizard should handle this neatly.

Should eventually be able to load completed steps and re-start a users session based on current step.

### docGenerator (reusable)
Uses schema as defined in `config.js` to create a document in a Substance instance.

### interface
Main application interface to fill in navigation, render other modules, etc.

## The Stack

### Front-end Design/Templating
DustJS + Foundation5

### Front-end JS Libraries
Wreqr (Vent) + Backbone-Forms + Backbone-Associations

### Front-end Foundations
RequireJS + Backbone + Backbone.Marionette + Lodash + JQuery

### Backend Apps/Libraries
Express + Mongoose

### Backend Foundations
Node.js + MongoDB