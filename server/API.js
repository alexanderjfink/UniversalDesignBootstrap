// API
// ===

module.exports.api = function(server, schema) {
	server.get('/', function(req, res){
		res.render('index', {title: 'UniversalDesignBootstrap'});
	});

}
