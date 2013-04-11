var hn = require('./hn');

hn.getHomePage(function(err, titles) {
  console.log(titles);
});
