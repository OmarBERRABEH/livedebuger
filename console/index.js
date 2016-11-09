module.exports = initConsole;


function initConsole(store) {

  store.addGetter(store.EVENTS.INSERT_URL,printConsole);

}



function  printConsole(data) {
	console.log('url passed ', data);
}