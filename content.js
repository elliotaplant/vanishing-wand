// content.js
function init() {
  var magicTime = false;
  var hasDeletedNode = false;

  var makeDisappear = function(mouseEvent) {
    mouseEvent.preventDefault();
    mouseEvent.target.remove();

    if (!mouseEvent.shiftKey) {
      removePowers()
    }

    hasDeletedNode = true;
  }

  var removeAtKeyup = function(keyEvent) {
    if (keyEvent.key === "Escape" ||
      (hasDeletedNode && keyEvent.key === "Shift")) {
      removePowers()
    }
  }

  var removePowers = function() {
    document.removeEventListener('click', makeDisappear)
    document.removeEventListener('keyup', removeAtKeyup)
    document.body.classList.remove('magician')
    magicTime = false;
  }

  var givePowers = function() {
    document.addEventListener('click', makeDisappear)
    document.addEventListener('keyup', removeAtKeyup);
    document.body.classList.add('magician')
    magicTime = true;
  }

  var toggleWand = function() {
    hasDeletedNode = false;
    if (magicTime) {
      removePowers()
    } else {
      givePowers()
    }
  }

  return toggleWand;
}

chrome.runtime.onMessage.addListener(init());
