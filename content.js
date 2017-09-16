// content.js
function init() {
  var magicTime = false;
  var hasDeletedNode = false;

  var makeDisappear = function(mouseEvent) {
    // Prevent click from bubbling up (eg, don't navigate to link)
    mouseEvent.preventDefault();

    // Don't allow deleting the body, head, or html elements
    if (!['BODY', 'HEAD', 'HTML'].includes(mouseEvent.target.tagName.toUpperCase())) {
      mouseEvent.target.remove();
    }

    if (!mouseEvent.shiftKey) {
      removePowers();
    }

    hasDeletedNode = true;
  };

  var removeAtKeyup = function(keyEvent) {
    if (keyEvent.key === "Escape" ||
      (hasDeletedNode && keyEvent.key === "Shift")) {
      removePowers();
    }
  };

  var removePowers = function() {
    document.removeEventListener('click', makeDisappear);
    document.removeEventListener('keyup', removeAtKeyup);
    document.body.classList.remove('magician');
    magicTime = false;
  };

  var givePowers = function() {
    document.addEventListener('click', makeDisappear);
    document.addEventListener('keyup', removeAtKeyup);
    document.body.classList.add('magician');
    magicTime = true;
  }

  var toggleWand = function() {
    hasDeletedNode = false;
    if (magicTime) {
      removePowers();
    } else {
      givePowers();
    }
  };

  return toggleWand;
}

chrome.runtime.onMessage.addListener(init());
