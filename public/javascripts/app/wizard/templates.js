define(function(require) {

	return {
		header: require('hbs!./templates/header'),
		footer: require('hbs!./templates/footer'),
		wizard: require('hbs!./templates/wizard'),
		stepItemView: require('hbs!./templates/stepItemView'),
		stepCompositeView: require('hbs!./templates/stepCompositeView')
	};
});