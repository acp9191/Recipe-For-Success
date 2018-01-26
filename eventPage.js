chrome.browserAction.onClicked.addListener(
	function execute(tab) {
		chrome.browserAction.onClicked.removeListener(execute);
		chrome.tabs.executeScript(tab.ib, {
			file: 'content.js'
		});
	}
);