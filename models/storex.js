/**
* @description a simple implementation flux with minimal method
* @author omar B ERRABBEH
* 09/11/2016
**/


Storex.prototype =  {};

/**
* @description: add a getter data
* @param eventName: name of the event(store/event) that callback will be  call
* @param cb: a callback  to be fired when eventName is commited
* @ported public
**/
Storex.prototype.addGetter = function _addGetter(eventName , cb) {
	var cbsEvent = this._getters[eventName];
	if(!cbsEvent) {
		cbsEvent = this._getters[eventName] =  []
	}

	cbsEvent.push(cb);
};

/**
* @description: add a action data
* @param action: a function to executed when a data is changed
* @ported public
**/
Storex.prototype.addAction = function _addAction(action) {
		this[action.name] =  action;
};


/**
* @description: a Events constant
* @ported public
**/
Storex.prototype.setEvents= function _setEvents(EVENTS) {
	this.EVENTS = EVENTS;
};


/**
* @description: a fired method to execute a callback listned to a eventName
* @param eventName: a eventName fired
* @param dataa : a data to be passed to a callback  linked to eventName
* @ported public
**/
Storex.prototype.commit = function _commit(eventName,data) {
	var cbsEvents = this._getters[eventName] &&  this._getters[eventName].length && this._getters[eventName];
	if(!!cbsEvents) {
		cbsEvents.forEach(function(cb){
			cb.call(null,data);
		});
	} 
};



module.exports =  new Storex();

/**
* @description a storex Class
**/
function Storex() {
	this._getters = [];
	this._actions = {};
}






