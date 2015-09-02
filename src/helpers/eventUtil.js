const KEYS = {
  ARROW_DOWN_KEY: 40,
  ARROW_LEFT_KEY: 37,
  ARROW_RIGHT_KEY: 39,
  ARROW_UP_KEY: 38,
  CTRL_KEY: 17,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  ESC_KEY: 27,
  META_KEY: 91,
  META_KEY2: 92,
  META_KEY3: 93,
  OPTION_KEY: 18,
  SHIFT_KEY: 16,
  SPACEBAR_KEY: 32,
  TAB_KEY: 9
};

const TOAST_DELAY = 400;

let preventDefault = function (event) {
  event.preventDefault();
};

let stop = function (event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.nativeEvent) {
      event.nativeEvent.stopImmediatePropagation();
    }
  }
}

let trigger = function (target, eventName, eventInfo) {
  let dataEvent = new CustomEvent(eventName, {
    detail: eventInfo,
    bubbles: true
  });

  if (target && target.getDOMNode ) {
    target = target.getDOMNode();
  }

  (target || window.document.body).dispatchEvent(dataEvent);
}

let showToast = function (message, immediately) {
  if (immediately) {
    trigger(document.body, 'showToast', { toastMessage: message });
  } else {
    setTimeout( () => {
      trigger(document.body, 'showToast', { toastMessage: message });
    }, TOAST_DELAY );
  }
};

let whichKey = function (event) {
  return event.keyCode || event.key || event.which;
}

module.exports = {
  keys: KEYS,
  preventDefault: preventDefault,
  showToast: showToast,
  stop: stop,
  trigger: trigger,
  whichKey: whichKey,
  disabledHref: 'javascript:void(0)',
};
