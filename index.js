var proxy = require('./proxy/index');
var config =  require('./models/config');
var rules =  require('./models/rules');

//storex
var store =  require('./models/storex');
require('./store/index')(store);



if(config.get('debugConsole') === true) {
	require('./console')(store);
}

// start proxy instance
proxy.start(config,rules,store);

if(config.get('web') === true) {
  //start webserver interface
  var app = require('./www/app')(store);
}