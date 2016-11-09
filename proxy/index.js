var http = require('http'),
    net = require('net'),
    httpProxy = require('http-proxy'),
    url = require('url'),
    util = require('util');


// var config =  require('./models/config');
// config.set('port',3128, true);




module.exports = {
	start
};




/** public Method **/
function start(config, rules, store) {
	
	var port = config.get('port') || 3128;
	var proxy = httpProxy.createServer();

	var server = http.createServer(function (req, res) {
	  var rewriteObject = rules.get(req.url);
	  var rewriteUrl = req.url;

	  if(rewriteObject) {
	  	if( typeof rewriteObject === 'string') {
	  		rewriteUrl = rewriteObject;
	  	}else {
	  		rewriteUrl = rewriteObject['forward'];
	  	}
	  }

	  store.insertUrl(req.url);
	 	
	  proxy.web(req, res, {target: rewriteUrl,prependPath:false});
	 
	}).listen(port);



}