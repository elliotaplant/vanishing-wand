// content.js
function init() {
  var magicTime = false;
  var hasDeletedNode = false;

  var makeDisappear = function(mouseEvent) {
    mouseEvent.preventDefault();
    mouseEvent.target.remove();
    if (!mouseEvent.shiftKey) {
      removePowers()
    } else if (!hasDeletedNode) {
      hasDeletedNode = true;
      document.addEventListener('keyup', removeAtShiftKeyup);
    }
  }

  var removeAtShiftKeyup = function(keyEvent) {
    if (keyEvent.key === "Shift") {
      console.log("removing at shift key up")
      removePowers()
    }
  }

  var removePowers = function() {
    document.removeEventListener('keyup', removeAtShiftKeyup)
    document.removeEventListener('click', makeDisappear)
    magicTime = false;
  }

  var toggleWand = function() {
    hasDeletedNode = false;
    if (magicTime) {
      removePowers()
    } else {
      document.addEventListener('click', makeDisappear)
    }
  }

  return toggleWand;
}

chrome.runtime.onMessage.addListener(init());
