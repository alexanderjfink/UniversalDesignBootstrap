define(function(require) {

	return {
		wizard				: require('rdust!templates/wizard.dust'),
		footer              : require('rdust!templates/footer.dust'),
		header              : require('rdust!templates/header.dust'),
		stepItemView		: require('rdust!templates/stepItemView.dust'),
		stepCompositeView	: require('rdust!templates/stepCompositeView.dust')
	};
});