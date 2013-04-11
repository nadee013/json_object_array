var hn = require('./hn');

hn.getHomePage(function(err, titles) {
	if (err) {
		console.log(err.message);
	} else {
  		console.log(titles);
		
	}
});
