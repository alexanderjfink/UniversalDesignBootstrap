define(function(require) {

	return {
		header: require('hbs!apps/wizard/templates/header'),
		footer: require('hbs!apps/wizard/templates/footer'),
		wizard: require('hbs!apps/wizard/templates/wizard'),
		stepItemView: require('hbs!apps/wizard/templates/stepItemView'),
		stepCompositeView: require('hbs!apps/wizard/templates/stepCompositeView')
	};
});