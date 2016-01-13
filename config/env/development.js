var port = process.env.PORT || 3000;
var mongoHost = process.env.MONGOHOST || 'localhost';
var mongoPort = process.env.MONGOPORT || 27017;

module.exports = {
	port: port,  // Data Leaf server port
	db: 'mongodb://' + mongoHost + ':' + mongoPort + '/leafs'
};
