var steem = require('steem')
steem.api.setOptions({ url: 'https://api.steemit.com' });
steem.broadcast.vote(
	'xxx',
	'curator',
	process.argv[2],
	process.argv[3],
	1500,
	function(err, result) {
	if (err) throw err;
});
