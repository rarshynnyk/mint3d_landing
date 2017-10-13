import scrollTo from 'jquery.scrollTo';

const scrollToModule = function($) {
  function init () {
    $('a[href^="#"]:not(.close, [data-toggle="collapse"])').on('click', function() {
      let target = $($(this).attr('href')),
        duration = 800;

      $(window).scrollTo(target, duration, {
        offset: function() {
          return {top: -60};
        }
      });
    });

    $('.navbar li a').on('click', function(){
      $('.navbar li').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  }

  return {
    init: init
  };

}(jQuery);

export default scrollToModule;
