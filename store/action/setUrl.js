module.exports = function(store) {
	store.addAction(insertUrl); 

	function insertUrl(data) {
		store.commit(store.EVENTS.INSERT_URL, data);
	}

};



