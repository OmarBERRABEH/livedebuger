var fs = require('fs');
var config = {};

module.exports =  getConfig();



function getConfig() {

	_readConfig();

	return {
		get: _get,
		set: _set,
		save: _save
	}

}




/** privates methodes **/

function _readConfig() {
	config = JSON.parse(fs.readFileSync('F:/labs/liveDebug/data/config.json', 'utf8'));
}


function _get(property) {
	var returned;
	if(typeof property === 'string') {
		returned = config[property];
	}else {
		returned = config;
	}
	return returned;
}


function _set(property, value , forceSaved) {
	var oldValue;
	if(property  &&  config[property] ) {
		oldValue = config[property];
		config[property] =  value;
		forceSaved = forceSaved && forceSaved !== oldValue;
	}
	if(forceSaved) {
			_save();
	}
}

function _save(aConfig) {
  fs.writeFileSync('F:/labs/liveDebug/data/config.json',JSON.stringify(aConfig || config));
}
