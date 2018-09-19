const express = require('express');
const app = express();
const controller = require('./controller.js');
const path = require('path');


//app.use(express.static(__dirname + '../public'));
//app.use(express.static(__dirname + '../public'));
//app.use("/", express.static('../client/dist'));

//app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/', express.static(path.join(__dirname, '../AppBuild/build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/house', (req, res) => {
	controller.getAllPhotos((data) => {
		//console.log('data returned is:', data);
		//res.writeHeader("Access-Control-Allow-Origin", "http://localhost:3000/house");
		//response.addHeader("Access-Control-Allow-Origin", "http://www.example.com");
		res.send(data);
		console.log('rightttttttttttt')
	});
});


app.listen(3007, () => {
	console.log('listening on port 3007');
});