var fs = require('fs');
var rules = {};

module.exports =  getRules();


function getRules() {

	_readRules();

	return {
		get : _get,
		set : _set
	}
}



function _readRules() {
	rules = JSON.parse(fs.readFileSync('F:/labs/liveDebug/data/rewrite.json', 'utf8'));
}

function _get(urlToRewrite) {
	var returned;
	if(urlToRewrite) {
		returned = rules[urlToRewrite];
	}else {
		returned = rules;
	}
	return returned;
}


function _set(urlToRewrite, newConfig, forceSave) {

	if(urlToRewrite) {
		oldValue = rules[urlToRewrite];
		rules[urlToRewrite] =  newConfig;
		forceSaved = forceSaved && forceSaved !== oldValue;
	}
	if(forceSaved) {
		_save();
	}
}


function _save(aRules) {
  fs.writeFileSync('F:/labs/liveDebug/data/rewrite.json',JSON.stringify(aRules || rules));
}
