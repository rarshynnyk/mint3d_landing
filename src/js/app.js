// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import fullpage from './modules/fullpage';
import sliderFeatures from './modules/sliderFeatures';
import sliderPromo from './modules/sliderPromo';
import sliderSpecifications from './modules/sliderSpecifications';
import scrollspy from './modules/scrollSpy';
// import wow from './modules/wow';

(($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    sliderFeatures.init();
    sliderPromo.init();
    sliderSpecifications.init();
    // scrollSpy.init();
    // wow.init();
  });

})(jQuery);

function scrollTo(event) {
  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }
}
