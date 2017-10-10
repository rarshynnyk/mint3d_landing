import WOW from 'wow.js';

var wow = function($) {
  const wowSelector = $('.wow');

  function init() {
    if (!wowSelector.length)
      return;

    wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: false, // default
      live: true // default
    });
    wow.init();
  }

  return {init: init};
}(jQuery);

export default wow;
