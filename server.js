var request = require("request");

// console.log("making request");

request('http://hndroidapi.appspot.com/news/format/json/page/?appid=test-app', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    if(typeof(body) == "string") {
    	var js_object = JSON.parse(body);
    	// console.log(js_object.items);
    	var object_array = js_object.items;
    	console.log(object_array.length);
    	for(var i = 0; i < object_array.length; i++) {
    		console.log("Title " +i+ "is " +object_array[i].title);
    	}
    }
   	// console.log(body); // Print the string object

  }
})