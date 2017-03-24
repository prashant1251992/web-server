 
 module.exports =function(){
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
return middleWare;
 };