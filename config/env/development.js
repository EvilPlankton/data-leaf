var port = process.env.PORT;

module.exports = {
	port: port,
	db: 'mongodb://' + process.env.IP + '/leafs',
	facebook: {
		clientID: 'insertyourclientidhere',
		clientSecret: 'insertyoursecrethere',
		callbackURL: 'http://' + process.env.IP +':'+ process.env.PORT +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'insertyourclientidhere',
		clientSecret: 'insertyoursecrethere',
		callbackURL: 'http://' + process.env.IP + ':' + process.env.PORT +'/oauth/twitter/callback'
	}
};