
chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
      chrome.notifications.create('', data.options);
    }
  });

console.log("Everything's Working af!!!");
