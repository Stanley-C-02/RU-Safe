var requestOptions = {
    method: "GET",
    redirect: "follow",
    mode: "allow-cors",
  };
  
  chrome.tabs.getSelected(null, (tab) => {
    // gets the current tab that the user is on
    document.getElementById("url").innerHTML = tab.url;

    // filterUrl = tab.url.replace(/^https?:\/\//,'');
    // displays it to the user

  
        // API call
    fetch("https://ipqualityscore.com/api/json/url/4VlWOKYzXTCXlRL9kBU2HSXXXXIb3SvQD/google.com") // Replace with your own API key
    .then((response) => response.json())
    .then(
      (result) =>
        (document.getElementById("quality").innerHTML = result.summary)
    )
    .catch((error) => console.trace(error));
  });
  