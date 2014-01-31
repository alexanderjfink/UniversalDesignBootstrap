exports = module.exports = function (app) {
	[
		'./course'
	].forEach(function (model) {
		require(model);
	});
};