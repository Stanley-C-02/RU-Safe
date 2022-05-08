var chatDownloadButton = document.getElementById("chat_download");
var attendiesDownloadButton = document.getElementById("attendies_download");

chatDownloadButton.addEventListener('click',function(){
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'attendance.js'
	});;
})