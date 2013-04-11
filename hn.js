var request = require("request");

module.exports.getHomePage = function(callback) {

	request('http://hndroidapi.appspot.com/news/format/json/page/?appid=test-app', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			if(typeof(body) == "string") {
				var js_object = JSON.parse(body);
				var object_array = js_object.items;
				var titles = new Array();

				for(var i = 0; i < object_array.length; i++) {
					titles.push(object_array[i].title);
				}
				callback(null, titles);
			}
		}
	});
};