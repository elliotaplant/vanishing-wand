// content.js
console.log('loaded');
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.body.setAttribute('style', 'cursor:not-allowed !important');
    document.onclick = function(mouseEvent) {
      mouseEvent.preventDefault();
      mouseEvent.target.remove();
    }
  }
);
