var express= require('express');

var app = express();

var PORT=3000; //capital variable specify the constants in JS

var middleWare= {
	requestAuthentication : function(req,res,next){
		console.log('Private Authentication');
		next();
	},
	logger : function(req,res,next){
		console.log('Request: '+ new Date().toString() +' '+req.method+' '+req.orignalUrl);
		next();
	}
};

// app.get('/',function(req,res){
	// res.send('Hello !');
// }); 

// app.use(middleWare.requestAuthentication);

app.use(middleWare.logger);

app.get('/about',middleWare.requestAuthentication,function(req,res){
	res.send('Hello 2 !');
}); 

app.use(express.static(__dirname +'/public'));

app.listen(PORT);