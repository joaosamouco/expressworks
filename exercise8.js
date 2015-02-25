var express = require('express');
var fs = require('fs');

var app = express();


app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if(err) {
			res.status(404).send("Can't read from file");
		}
		else {
			res.json(JSON.parse(data.toString()));
		}
	});
});

app.listen(process.argv[2]);