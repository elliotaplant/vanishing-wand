// content.js
console.log('script loaded');

function init() {
  var magicTime = false;

  var makeDisappear = function(mouseEvent) {
    console.log('making Dissapearing')
    mouseEvent.preventDefault();
    mouseEvent.target.remove();
    if (!mouseEvent.shiftKey) {
      removePowers();
    }
  }

  var removePowers = function() {
    console.log('removing powers')
    document.removeEventListener('click', makeDisappear)
    magicTime = false;
  }

  var toggleWand = function() {
    console.log('toggling wand')
    if (magicTime) {
      removePowers()
    } else {
      document.addEventListener('click', makeDisappear)
    }
  }

  console.log('init run')

  return toggleWand;
}

chrome.runtime.onMessage.addListener(init());
