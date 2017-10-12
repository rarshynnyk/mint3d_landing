import scrollTo from 'jquery.scrollTo';

const scrollToModule = function($) {
  function init () {
    $('a[href^="#"]').on('click', function() {
      let target = $($(this).attr('href')),
        duration = 800;

      $(window).scrollTo(target, duration, {
        offset: function() {
          return {top: -60};
        }
      });
    });
  }

  return {
    init: init
  };

}(jQuery);

export default scrollToModule;
