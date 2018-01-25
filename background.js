console.log("background running");

chrome.browserAction.onClicked.addListener(function (tab) {
	console.log("button clicked!")
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'content.js'
	});
});