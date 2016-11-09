module.exports = function(store) {
	var EVENTS = require('./event');
	
	store.setEvents(EVENTS);

	require('./action/index')(store); 
}