import WOW from 'wow.js';

const wow = function($) {
  const wowSelector = $('.wow');

  function init() {
    if (!wowSelector.length)
      return;

    var wow = new WOW({
      offset: 50,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  return {init: init};
}(jQuery);

export default wow;
