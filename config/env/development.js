var port = 3000;

module.exports = {
	port: port,
	db: 'mongodb://localhost/leafs',
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
